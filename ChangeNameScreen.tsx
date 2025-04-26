import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const ChangeNameScreen: React.FC = () => {
  const [newName, setNewName] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    if (newName.trim() === '') {
      Alert.alert('Error', 'Please enter a valid name.');
      return;
    }
    // Here you would save the new name to your backend or user settings
    Alert.alert(
      'Success',
      `Your name has been changed to ${newName}`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SettingsScreen' as never), // Navigate to Settings when OK is pressed
        },
      ]
    );
  };

  const handleCancel = () => {
    navigation.navigate('SettingsScreen' as never); // Go back without saving
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Change Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter new name"
          value={newName}
          onChangeText={setNewName}
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

export default ChangeNameScreen;
