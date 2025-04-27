import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sign = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const [passv, setpassv] = useState(true);
  const [pass, setpass] = useState('');
  const [email, setemail] = useState('');

  const API_URL = 'http://192.168.1.36:5000'; 

  const checkButtonStatus = (): boolean => email === '' || pass === '';

  const fpass = () => setpassv(prev => !prev);

  const handleLogin = async () => {
    if (checkButtonStatus()) {
      alert('Please fill all fields');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: pass }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('userToken', data.token);
        console.log('Login successful');
        setIsModalVisible(false); // CLOSE THE MODAL FIRST
        navigation.navigate({
          key: 'NewScreen',
          name: 'NewScreen',
        } as never);
      } else {
        alert(data.message || 'Login failed');
      }
      
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to connect to server');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.imtop}
          source={require('./SignPics/image.png')}
        />
      </View>

      <Modal visible={isModalVisible} animationType="fade" transparent>
        <Animated.View style={[styles.modalBackground, { opacity: fadeAnim }]}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.t1}>Sign In</Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsModalVisible(false);
                    setTimeout(() => {
                      navigation.navigate('Home' as never);
                    }, 300);
                  }}
                >
                  <Image
                    source={require('./SignPics/ic_close.png')}
                    style={{ width: 20, height: 20, marginTop: 10 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#E67F1E"
                  onChangeText={t => setemail(t)}
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={passv}
                    onChangeText={t => setpass(t)}
                    placeholderTextColor="#E67F1E"
                    style={{ flex: 1 }}
                  />
                  <TouchableOpacity onPress={fpass}>
                    <Image
                      style={{ marginTop: 20, marginLeft: 10 }}
                      source={require('./SignPics/g22.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleLogin}
                >
                  <Text style={styles.btnText}>
                    DONE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FEC54B',
    width: '90%',
    borderRadius: 30,
    paddingHorizontal: 90,
    paddingVertical: 20,
    marginBottom: 10,
    marginTop: 20,
    height: 70,
  },
  container: {
    flex: 1,
  },
  imtop: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  t1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 9999,
    elevation: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  inputContainer: {
    gap: 15,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 22,
    height: 55,
    borderColor: '#E67F1E',
  },
  passwordContainer: {
    height: 55,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#E67F1E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  forgot: {
    color: '#E67F1E',
    fontSize: 14,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Sign;
