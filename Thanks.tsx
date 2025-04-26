import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Bar from './Components/Bar';
import Button from './Components/Button';

const Thanks = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Bar pic={require('./ThanksPics/ic_close2.png')} text="THANK YOU" />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingVertical: 90,
        }}>
        <Image source={require('./ThanksPics/driver2.png')} />

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: 150,
          }}>
          Your Order in process
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 18,
            color: 'black',
          }}>
          Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do
          eiusmod
        </Text>

        <View>
          <Image
            source={require('./ThanksPics/borderBot.png')}
            style={{marginLeft: 30, marginTop: 80}}
          />
        </View>

        <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Tracking' as never)}
>
  <Text style={{color:'black',fontSize:20,marginBottom:5,fontWeight:'bold',textAlign:'center'}}>
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
    paddingVertical:20,
    marginBottom: 10,
    marginTop: 20,
    height: 70,
  },
});


export default Thanks;


