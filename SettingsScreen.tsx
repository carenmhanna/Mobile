import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from './Components/Menu';

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleChangeName = () => {
    navigation.navigate('ChangeNameScreen' as never); 
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePasswordScreen' as never); 
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./SettingsScreenPics/fruits.jpg')} style={styles.backgroundImage}>
        
        <SafeAreaView style={styles.overlayWrapper}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Settings</Text>

            <TouchableOpacity style={styles.menuItem} onPress={handleChangeName}>
              <Text style={styles.menuItemText}>Change Name</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={handleChangePassword}>
              <Text style={styles.menuItemText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={styles.menuContainer}>
          <Menu />
        </View>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'white',
    width: '90%', // instead of marginHorizontal
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: 'black',
  },
  menuItem: {
    backgroundColor: 'orange',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  menuItemText: {
    color: 'white',
    fontSize: 18,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default SettingsScreen;
