import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const Order = () => {
  const navigation = useNavigation();

  const [governateOpen, setGovernateOpen] = useState(false);
  const [governate, setGovernate] = useState<string | null>('beirut');
  const [governateItems, setGovernateItems] = useState([
    { label: 'Beirut', value: 'beirut' },
    { label: 'Mount Lebanon', value: 'mount_lebanon' },
    { label: 'North Lebanon', value: 'north_lebanon' },
    { label: 'South Lebanon', value: 'south_lebanon' },
    { label: 'Bekaa', value: 'bekaa' },
    { label: 'Nabatieh', value: 'nabatieh' },
    { label: 'Baalbek-Hermel', value: 'baalbek_hermel' },
    { label: 'Akkar', value: 'akkar' },
    { label: 'Jbeil', value: 'jbeil' },
    { label: 'Kesserwan', value: 'kesserwan' },
    { label: 'Zahle', value: 'zahle' },
  ]);

  const [cityOpen, setCityOpen] = useState(false);
  const [city, setCity] = useState<string | null>('hamra');
  const [cityItems, setCityItems] = useState([
    { label: 'Hamra', value: 'hamra' },
    { label: 'Achrafieh', value: 'achrafieh' },
    { label: 'Gemmayzeh', value: 'gemmayzeh' },
    { label: 'Mar Mikhael', value: 'mar_mikhael' },
    { label: 'Verdun', value: 'verdun' },
  ]);

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [isNextEnabled, setIsNextEnabled] = useState<boolean>(false);  // State to track if the button is enabled

  const handlePhoneNumberChange = (value: string) => {
    if (value.length <= 8 && /^[0-9]*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const validateEmail = (value: string) => {
    setEmail(value);
  };

  useEffect(() => {
    switch (governate) {
      case 'beirut':
        setCityItems([
          { label: 'Hamra', value: 'hamra' },
          { label: 'Achrafieh', value: 'achrafieh' },
          { label: 'Gemmayzeh', value: 'gemmayzeh' },
          { label: 'Mar Mikhael', value: 'mar_mikhael' },
          { label: 'Verdun', value: 'verdun' },
        ]);
        setCity('hamra');
        break;
      case 'mount_lebanon':
        setCityItems([
          { label: 'Jounieh', value: 'jounieh' },
          { label: 'Ain El Rihaneh', value: 'ain_rihaneh' },
          { label: 'Jbeil', value: 'jbeil' },
          { label: 'Baabda', value: 'baabda' },
          { label: 'Dahieh', value: 'dahieh' },
        ]);
        setCity('jounieh');
        break;
      case 'north_lebanon':
        setCityItems([
          { label: 'Tripoli', value: 'tripoli' },
          { label: 'Batroun', value: 'batroun' },
          { label: 'Koura', value: 'koura' },
          { label: 'Zgharta', value: 'zgharta' },
          { label: 'Akkar', value: 'akkar' },
        ]);
        setCity('tripoli');
        break;
      case 'south_lebanon':
        setCityItems([
          { label: 'Saida', value: 'saida' },
          { label: 'Tyr', value: 'tyr' },
          { label: 'Jezzine', value: 'jezzine' },
          { label: 'Nabatieh', value: 'nabatieh' },
          { label: 'Hasbaya', value: 'hasbaya' },
        ]);
        setCity('saida');
        break;
      case 'bekaa':
        setCityItems([
          { label: 'Zahle', value: 'zahle' },
          { label: 'Baalbek', value: 'baalbek' },
          { label: 'Hermel', value: 'hermel' },
          { label: 'Rashaya', value: 'rashaya' },
          { label: 'Baalbeck', value: 'baalbeck' },
        ]);
        setCity('zahle');
        break;
      default:
        setCityItems([]);
        setCity(null);
        break;
    }
  }, [governate]);

  // Check if all required fields are filled and phone number is 8 digits
  useEffect(() => {
    if (firstName && lastName && email && phoneNumber.length === 8 && governate && city) {
      setIsNextEnabled(true);
    } else {
      setIsNextEnabled(false);
    }
  }, [firstName, lastName, email, phoneNumber, governate, city]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Adjust for iOS
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView contentContainerStyle={{ paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('Cart' as never)} style={{ position: 'absolute', left: 20 }}>
                <Image source={require('./OrderPics/f2.png')} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>

              <Text style={styles.checkoutText}>Checkout</Text>
            </View>

            <Image source={require('./OrderPics/borderBot.png')} style={styles.borderBot} />

            <View style={styles.stepper}>
              <Image source={require('./OrderPics/stepper.png')} />
            </View>

            {/* Form Fields */}
            <View style={[styles.formField, { marginTop: 20 }]}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                placeholder="Rafatul"
                style={styles.textInput}
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                placeholder="Islam"
                style={styles.textInput}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                placeholder="rafatul3588@gmail.com"
                value={email}
                onChangeText={validateEmail}
                style={styles.textInput}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.formField}>
              <Text style={styles.label}>Phone</Text>
              <View style={styles.phoneInput}>
                <View style={styles.phonePrefix}>
                  <Text style={{ color: 'black' }}>+961</Text>
                </View>
                <TextInput
                  placeholder="Phone Number"
                  value={phoneNumber}
                  keyboardType="numeric"
                  onChangeText={handlePhoneNumberChange}
                  style={{ flex: 1, paddingLeft: 10 }}
                />
              </View>
            </View>

            {/* Dropdown for Governate */}
            <View style={[styles.formField, { zIndex: 2000 }]}>
              <Text style={styles.label}>Governate</Text>
              <DropDownPicker
                open={governateOpen}
                value={governate}
                items={governateItems}
                setOpen={setGovernateOpen}
                setValue={setGovernate}
                setItems={setGovernateItems}
                style={styles.dropdownContainer}
                dropDownContainerStyle={styles.dropdownList}
                placeholder="Select a governate"
                listMode="SCROLLVIEW"
                dropDownDirection="BOTTOM"
              />
            </View>

            {/* Dropdown for City */}
            <View style={[styles.formField, { zIndex: 1000 }]}>
              <Text style={styles.label}>City</Text>
              <DropDownPicker
                open={cityOpen}
                value={city}
                items={cityItems}
                setOpen={setCityOpen}
                setValue={setCity}
                setItems={setCityItems}
                style={styles.dropdownContainer}
                dropDownContainerStyle={styles.dropdownList}
                placeholder="Select a city"
                listMode="SCROLLVIEW"
                dropDownDirection="BOTTOM"
              />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={[styles.btorange, { opacity: isNextEnabled ? 1 : 0.5 }]}  // Disable button if not valid
                onPress={() => navigation.navigate({ key: 'Order2', name: 'Order2' } as never)}
                disabled={!isNextEnabled}  // Disable the button if validation fails
              >
                <Text style={styles.nextButtonText}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  checkoutText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  borderBot: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  stepper: {
    marginTop: 20,
    alignItems: 'center',
  },
  formField: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  phoneInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    height: 40,
  },
  phonePrefix: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  dropdownContainer: {
    borderColor: '#ccc',
    height: 40,
  },
  dropdownList: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  btorange: {
    backgroundColor: '#FF6600',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Order;
