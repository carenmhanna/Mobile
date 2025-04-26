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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const Order2 = () => {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Canada', value: 'canada' },
    { label: 'Lebanon', value: 'lebanon' },
    { label: 'France', value: 'france' },
    { label: 'UK', value: 'uk' },
    { label: 'USA', value: 'usa' },
    { label: 'Dubai', value: 'dubai' },
  ]);

  const [text, setText] = useState<string>('Choose your country');
  const [listv, setListv] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const toggleList = () => {
    setListv(!listv);
    setText('Select your country');
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const [selectedPayment, setSelectedPayment] = useState<'cash' | 'card' | 'credit'>('cash');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: 'row', gap: 100, justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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

            <TouchableOpacity onPress={() => setSelectedPayment('credit')}>
              <View style={[styles.paymentOption, selectedPayment === 'credit' && styles.selected]}>
                <Text style={styles.paymentText}>Credit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Image source={require('./Order2Pics/borderBot.png')} style={{ marginLeft: 30, marginTop: 20 }} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={require('./Order2Pics/Creditcard.png')} style={{ marginLeft: 30, marginTop: 20 }} />
            <Image source={require('./Order2Pics/c22.png')} style={{ marginLeft: 30, marginTop: 20 }} />
            <Image source={require('./Order2Pics/Creditcard.png')} style={{ marginLeft: 30, marginTop: 20 }} />
          </View>
        </ScrollView>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card Holder Name</Text>
          <View style={styles.input}><TextInput placeholder='Md Rafatul islam' /></View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card Number</Text>
          <View style={styles.input}><TextInput placeholder='333 4444 5555 6666' /></View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={[styles.inputContainer, { marginRight: 10 }]}>
            <Text style={styles.label}>Month/Year</Text>
            <View style={styles.input2}><TextInput placeholder="Enter here" /></View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CVV</Text>
            <View style={styles.input2}><TextInput placeholder="Enter here" /></View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
          <Text style={styles.label}>Country</Text>
          <View style={styles.countryInput}>
            <TextInput placeholder={text} />
            <TouchableOpacity onPress={toggleList}>
              <Image source={require('./Order2Pics/fle.png')} style={styles.dropdownArrow} />
            </TouchableOpacity>
          </View>
          {listv && (
            <ScrollView style={styles.countryList} showsVerticalScrollIndicator>
              {items.map((item) => (
                <TouchableOpacity
                  key={item.value}
                  style={styles.countryOption}
                  onPress={() => { setText(item.label); setListv(false); }}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
          <Text style={styles.label}>Country</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Choose your country"
            style={{ borderRadius: 30, marginTop: 10, padding: 10 }}
          />
        </View>

        <View style={styles.saveCheckbox}>
          <TouchableOpacity onPress={handleCheck}>
            <Image source={checked ? require('./Order2Pics/ic_check.png') : require('./Order2Pics/check.png')} />
          </TouchableOpacity>
          <Text style={styles.label}>Save credit card details</Text>
        </View>

        <Image source={require('./Order2Pics/borderBot.png')} style={{ marginLeft: 30, marginTop: 10 }} />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.btorange}
            onPress={() => {
              navigation.navigate({ key: 'Thanks', name: 'Thanks' } as never);
            }}
          >
            <Text style={styles.confirmText}>CONFIRM ORDER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#FEC54B',
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
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  selected: {
    backgroundColor: '#FEC54B',
  },
  paymentText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  countryInput: {
    flexDirection: 'row',
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    marginTop: 10,
  },
  dropdownArrow: {
    marginTop: 22,
    position: 'absolute',
    left: 150,
  },
  countryList: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#E67F1E',
    marginTop: 10,
  },
  countryOption: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 140,
  },
  saveCheckbox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 35,
    marginTop: 20,
  },
});

export default Order2;
