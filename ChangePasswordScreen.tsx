import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const ChangePasswordScreen: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    if (newPassword.trim() === '' || confirmPassword.trim() === '') {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    // Here you would save the new password to your backend or user settings
    Alert.alert(
      'Success',
      'Your password has been changed.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SettingsScreen' as never), // Navigate back to Settings on success
        },
      ]
    );
  };

  const handleCancel = () => {
    navigation.navigate('SettingsScreen' as never); // Navigate back without saving
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Change Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  form: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    width: '100%',
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  cancelButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default ChangePasswordScreen;
