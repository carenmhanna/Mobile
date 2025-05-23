import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isModal2Visible, setIsModal2Visible] = useState<boolean>(false);
  const [passv, setPassv] = useState<boolean>(true);
  const navigation = useNavigation();

  const [formValues, setFormValues] = useState({
    name: '',
    familyname: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isModal2Visible) {
      const timer = setTimeout(() => {
        setIsModal2Visible(false);
        navigation.navigate('NewScreen' as never);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isModal2Visible, navigation]);

  const updateField = (field: keyof typeof formValues, value: string) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const checkButtonStatus = (): boolean => {
    return (
      formValues.email.trim() === '' ||
      formValues.familyname.trim() === '' ||
      formValues.name.trim() === '' ||
      formValues.password.trim() === ''
    );
  };

  const createAccount = async () => {
    const { name, familyname, email, password } = formValues;

    const nameRegex = /^[A-Za-z]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!nameRegex.test(name)) {
      alert('Name must be at least 2 letters and contain only alphabetic characters.');
      return;
    }
    if (!nameRegex.test(familyname)) {
      alert('Family Name must be at least 2 letters and contain only alphabetic characters.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters, include a letter, number and special character.');
      return;
    }

    setIsModalVisible(false);

    const API_URL = 'http://192.168.1.36:5000';

    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, familyname, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Account created successfully');

        const userToken = data.token;

        if (userToken) {
          console.log('Received token:', userToken);
          await AsyncStorage.setItem('userToken', userToken);
          console.log('User token saved to AsyncStorage');
        } else {
          console.error('User token is missing');
        }

        setIsModal2Visible(true);
      } else {
        alert(data.message || 'Failed to create account');
        setIsModalVisible(true);
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Failed to connect to server');
      setIsModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground style={styles.imtop} source={require('./LoginPics/fruits.jpeg')} />
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.modalBackground}>
          <ScrollView contentContainerStyle={styles.modalContainer} keyboardShouldPersistTaps="handled">
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
              <Text style={styles.t1}>Create your account</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./LoginPics/ic_close.png')}
                  style={{ width: 20, height: 20, marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 25, justifyContent: 'center', paddingHorizontal: 10 }}>
              <TextInput
                placeholder="Name"
                style={styles.input}
                value={formValues.name}
                placeholderTextColor="#E67F1E"
                onChangeText={t => updateField('name', t)}
              />
              <TextInput
                placeholder="Family Name"
                style={styles.input}
                value={formValues.familyname}
                placeholderTextColor="#E67F1E"
                onChangeText={t => updateField('familyname', t)}
              />
            </View>

            <View style={{ marginTop: 20, width: '100%' }}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={formValues.email}
                placeholderTextColor="#E67F1E"
                onChangeText={t => updateField('email', t)}
              />
              <View style={styles.passwordWrapper}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={passv}
                  placeholderTextColor="#E67F1E"
                  onChangeText={t => updateField('password', t)}
                  value={formValues.password}
                  style={{ flex: 1, color: 'grey' }}
                />
                <TouchableOpacity onPress={() => setPassv(prev => !prev)}>
                  <Image style={{ width: 24, height: 24 }} source={require('./LoginPics/g22.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={{ color: 'black', fontSize: 20 }}>By tapping Sign up you accept all</Text>
              <Text style={{ color: '#E67F1E', fontSize: 20, textAlign: 'center' }}>
                terms <Text style={{ color: 'black' }}>and</Text> conditions
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.btorange, { opacity: checkButtonStatus() ? 0.5 : 1 }]}
              onPress={createAccount}
              disabled={checkButtonStatus()}>
              <Text style={styles.btnText}>Create an account</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>

      <Modal visible={isModal2Visible} transparent={true} animationType="slide">
        <View style={styles.modalBackground2}>
          <View style={styles.modalContainer2}>
            <Text style={styles.txt2}>Welcome</Text>
            <Text style={styles.txt2}>{formValues.name}!</Text>
            <Image source={require('./LoginPics/congrats.jpg')} resizeMode="contain" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  imtop: { height: '100%', width: '100%', resizeMode: 'cover' },
  t1: { color: 'black', fontWeight: 'bold', fontSize: 25 },
  input: {
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: '#E67F1E',
    marginBottom: 10,
    height: 55,
    color: 'grey',
    flex: 1,
  },
  passwordWrapper: {
    height: 55,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#E67F1E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  btorange: {
    backgroundColor: 'orange',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    marginBottom: 30,
    marginTop: 10,
    height: 70,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  modalBackground: { flex: 1, justifyContent: 'flex-end' },
  modalContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalBackground2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer2: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  txt2: {
    fontSize: 24,
    color: '#E67F1E',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Login;
