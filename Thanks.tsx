import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications'; // Make sure you have this import
import Bar from './Components/Bar';
import Button from './Components/Button';

const Thanks = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(20); // 20-second timer
  const [modalVisible, setModalVisible] = useState(true); // Show modal by default

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Clean up the interval on unmount
    } else {
      setModalVisible(false); // Close the modal after the timer reaches 0
    }
  }, [timer]);

  // Handle cancel order action
  const handleCancelOrder = () => {
    setModalVisible(false); // Close the modal first
    alert('Your order was successfully canceled.');
    navigation.navigate('NewScreen' as never); // Navigate back to NewScreen
  };

  // Handle confirm order action and schedule notification
  const handleConfirmOrder = async () => {
    setModalVisible(false); // Hide the modal

    // Define the trigger object
    const trigger = {
      type: 'timeInterval', // This is necessary for the time-based trigger
      seconds: 120,         // Trigger after 2 minutes (120 seconds)
      repeats: false,       // The notification will not repeat
    };

    // Schedule the notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Order Update 🚚',
        body: 'Your order is almost ready! Thank you for your patience.',
      },
      trigger, // Pass the trigger object here
    });
  };

  return (
    <SafeAreaView>
      <Bar pic={require('./ThanksPics/ic_close2.png')} text="THANK YOU" />

      {/* Modal for 20 seconds to cancel order */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              You have {timer} seconds.
            </Text>
            <Text style={styles.modalText}>
              to cancel your order.
            </Text>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancelOrder}
            >
              <Text style={styles.cancelText}>Cancel Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmOrder}
            >
              <Text style={styles.confirmText}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingVertical: 90,
        }}
      >
        <Image source={require('./ThanksPics/driver2.png')} />

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: 150,
          }}
        >
          Your Order is in process
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 18,
            color: 'black',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do
          eiusmod
        </Text>

        <View>
          <Image
            source={require('./ThanksPics/borderBot.png')}
            style={{ marginLeft: 30, marginTop: 80 }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tracking' as never)}
        >
          <Text style={{ color: 'black', fontSize: 20, marginBottom: 5, fontWeight: 'bold', textAlign: 'center' }}>
            Track your order
          </Text>
        </TouchableOpacity>
      </View>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: '#FEC54B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#4CAF50', // Green button for confirmation
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Thanks;
