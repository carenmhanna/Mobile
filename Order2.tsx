import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Order2 = () => {
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [monthYear, setMonthYear] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<'cash' | 'card' | 'whish'>('cash');
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  // Validate Month/Year format (MM/YY)
  const validateMonthYear = (input: string) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Format MM/YY
    return regex.test(input);
  };

  // Check if all fields are valid
  const isFormValid = () => {
    return (
      selectedPayment=='cash'
      ||
      (cardNumber.length === 16 &&
      cvv.length === 4 &&
      !isNaN(Number(cardNumber)) &&
      !isNaN(Number(cvv)) &&
      validateMonthYear(monthYear) &&
      cardHolderName.trim() !== '')
    );
  };

  const handleConfirmOrder = () => {
    // Check if fields are filled
    if (selectedPayment=='cash'){
      navigation.navigate({ key: 'Thanks', name: 'Thanks' } as never);
    }
    else{
    if (!cardHolderName.trim()) {
      Alert.alert('Missing Information', 'Please enter your card holder name.');
      return;
    }
    if (cardNumber.length !== 16 || isNaN(Number(cardNumber))) {
      Alert.alert('Invalid Card Number', 'Please enter a valid 16-digit card number.');
      return;
    }
    if (cvv.length !== 4 || isNaN(Number(cvv))) {
      Alert.alert('Invalid CVV', 'Please enter a valid 3 or 4-digit CVV.');
      return;
    }
    if (!validateMonthYear(monthYear)) {
      Alert.alert('Invalid Expiry Date', 'Please enter a valid expiry date in MM/YY format.');
      return;
    }
    if (checked) {
      Alert.alert('Agreement Required', 'Please confirm that you want to save your card details.');
      return;
    }

    if (!isFormValid()) {
      Alert.alert('Invalid Input', 'Please ensure all fields are filled correctly and contain valid numbers.');
    } else {
      navigation.navigate({ key: 'Thanks', name: 'Thanks' } as never);
    }
  }
  };

  // Calculate the expected delivery date
  const expectedDays = 5; // Expected delivery in 5 days
  const currentDate = new Date();
  const expectedDeliveryDate = new Date(currentDate);
  expectedDeliveryDate.setDate(currentDate.getDate() + expectedDays);
  const formattedDeliveryDate = expectedDeliveryDate.toLocaleDateString();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
          <View style={{ flexDirection: 'row', gap: 100, justifyContent: 'flex-start' }}>
            <TouchableOpacity onPress={() => navigation.navigate({ key: 'Order', name: 'Order' } as never)}>
              <Image source={require('./Order2Pics/f2.png')} style={{ marginLeft: 30, marginTop: 30 }} />
            </TouchableOpacity>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25, marginTop: 40 }}>Checkout</Text>
          </View>

          <Image source={require('./Order2Pics/borderBot.png')} style={{ marginLeft: 30, marginTop: 30 }} />

          <View style={{ backgroundColor: 'white', paddingVertical: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
            <Image source={require('./Order2Pics/ss.png')} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', gap: 20, paddingLeft: 10 }}>
              <TouchableOpacity onPress={() => setSelectedPayment('cash')}>
                <View style={[styles.paymentOption, selectedPayment === 'cash' && styles.selected]}>
                  <Text style={styles.paymentText}>Cash On Delivery</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedPayment('card')}>
                <View style={[styles.paymentOption, selectedPayment === 'card' && styles.selected]}>
                  <Text style={styles.paymentText}>Credit Card</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedPayment('whish')}>
                <View style={[styles.paymentOption, selectedPayment === 'whish' && styles.selected]}>
                  <Text style={styles.paymentText}>Whish</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Image source={require('./Order2Pics/borderBot.png')} style={{ marginLeft: 30, marginTop: 20 }} />

          {selectedPayment === 'cash' && (
            <View style={styles.deliveryInfo}>
              <Text style={styles.text}>Expected delivery in {expectedDays} days</Text>
              <Text style={styles.date}>{formattedDeliveryDate}</Text>
              <Image source={require('./Order2Pics/deliveryTruck.avif')} style={styles.image} />
            </View>
          )}

          {/* Hide all the content below the truck image when 'cash' is selected */}
          {selectedPayment !== 'cash' && (
            <>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Image source={require('./Order2Pics/Creditcard.png')} style={{ marginLeft: 30, marginTop: 20 }} />
                  <Image source={require('./Order2Pics/c22.png')} style={{ marginLeft: 30, marginTop: 20 }} />
                  <Image source={require('./Order2Pics/Creditcard.png')} style={{ marginLeft: 30, marginTop: 20 }} />
                </View>
              </ScrollView>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Card Holder Name</Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder='Md Rafatul Islam'
                    value={cardHolderName}
                    onChangeText={setCardHolderName}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Card Number</Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder='3334 4444 5555 6666'
                    keyboardType="numeric"
                    maxLength={16}
                    value={cardNumber}
                    onChangeText={setCardNumber}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', gap: 50 }}>
                <View>
                  <Text style={styles.label}>Month/Year</Text>
                  <View style={styles.input2}>
                    <TextInput
                      placeholder="MM/YY"
                      maxLength={5}
                      value={monthYear}
                      onChangeText={setMonthYear}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>CVV</Text>
                  <View style={styles.input2}>
                    <TextInput
                      placeholder="CVV"
                      keyboardType="numeric"
                      maxLength={4}
                      value={cvv}
                      onChangeText={setCvv}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.saveCheckbox}>
                <TouchableOpacity onPress={handleCheck}>
                  <Image source={checked ? require('./Order2Pics/ic_check.png') : require('./Order2Pics/check.png')} />
                </TouchableOpacity>
                <Text style={styles.label}>Save credit card details</Text>
              </View>

              <Image source={require('./Order2Pics/borderBot.png')} style={{ marginLeft: 30, marginTop: 10 }} />
            </>
          )}

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              style={[styles.btorange, { backgroundColor: isFormValid() ? '#FEC54B' : '#EAEAEA' }]} // Change button color if form is not valid
              onPress={handleConfirmOrder}
            >
              <Text style={styles.confirmText}>CONFIRM ORDER</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'grey',
    padding: 10,
    backgroundColor: '#EAEAEA',
    marginTop: 10,
    paddingLeft: 20,
  },
  input2: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
  inputContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  label: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  btorange: {
    width: '90%',
    borderRadius: 30,
    padding: 20,
    marginBottom: 10,
    marginTop: 30,
    height: 70,
  },
  confirmText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paymentOption: {
    borderWidth: 3,
    borderColor: '#FEC54B',
    borderRadius: 5,
    padding: 10,
    width: 150,
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: '#FEC54B',
  },
  paymentText: {
    color: 'black',
    textAlign: 'center',
  },
  saveCheckbox: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default Order2;
