import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Menu from './Components/Menu';
import Bar from './Components/Bar';
import Button from './Components/Button';

const Tracking = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Bar pic={require('./TrackingPics/ic_close2.png')} text="Order Tracking" />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 20,
          marginRight: 50,
        }}>
        <Image source={require('./TrackingPics/moto.png')} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 20,
        }}>
        <Image source={require('./TrackingPics/line.png')} />

        <View
          style={{
            flexDirection: 'column',
            gap: 30,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
              step 1
            </Text>
            <Text style={{color: 'black', fontSize: 16}}>
              Lorem ipsum dolor sit amet,{'\n'} adipiscing elit, sed do eiusmod
            </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
                marginTop: 40,
              }}>
              step 2
            </Text>
            <Text style={{color: 'black', fontSize: 16}}>
              Lorem ipsum dolor sit amet,{'\n'} adipiscing elit, sed do eiusmod
            </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
                marginTop: 40,
              }}>
              step 3
            </Text>
            <Text style={{color: 'black', fontSize: 16}}>
              Lorem ipsum dolor sit amet,{'\n'} adipiscing elit, sed do eiusmod
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Image
          source={require('./TrackingPics/borderBot.png')}
          style={{marginLeft: 30, marginTop: 15}}
        />
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Review' as never)}
      >
        <Text style={{color:'black',fontSize:20,marginBottom:5,fontWeight:'bold',textAlign:'center'}}>
        SUBMIT REVIEW
        </Text>
      </TouchableOpacity>
      </View>

      <Menu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btorange: {
    backgroundColor: '#FEC54B',
    width: '90%',
    borderRadius: 30,
    paddingHorizontal: 90,
    paddingVertical: 20,
    marginBottom: 10,
    marginTop: 20,
    height: 70,
  },
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

export default Tracking;
