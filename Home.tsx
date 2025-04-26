import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const [step, setstep] = useState(1);
  

  const increaseStep = () => {
    if (step < 3) {
      setstep(step + 1);
    }
  };

  const decreaseStep = () => {
    setstep(step - 1);
  };

  function movecreate() {
    navigation.navigate({
      key: 'Login',
      name: 'Login',
    } as never);
  }

  function moveSignIn() {
    navigation.navigate({
      key: 'Sign',
      name: 'Sign',
    } as never);
  }

  console.log(step);


  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white',}}>
      {(step == 2 || step == 1) && (
        <View style={styles.main}>
          {step === 2 && (
            <TouchableOpacity onPress={() => decreaseStep()}>
              <Image
                style={{position: 'absolute', right: 140, top: 20}}
                source={require('./HomePics/boutton.png')}
              />
            </TouchableOpacity>
          )}
          <Image style={{marginTop: 70}} source={require('./HomePics/image6.png')} />
          <Text style={styles.txt1}>
            {step === 1 ? 'Welcome To fresh Fruits' : 'We provide best quality'}
          </Text>
          <Text style={styles.txt1}>
            {step === 1 ? 'Grocery application' : ' Fruits to your family'}
          </Text>
          <Text style={{marginTop: 10, fontSize: 14}}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text> adipiscing elit, sed do eiusmod tempor</Text>
          {step === 1 ? (
            <Image
              source={require('./HomePics/dotSlider.png')}
              style={{marginTop: 30}}
            />
          ) : (
            <Image source={require('./HomePics/new.png')} style={{marginTop: 30}} />
          )}
          <TouchableOpacity onPress={increaseStep} style={styles.bt}>
  <Text style={styles.txtblanc}>Next</Text>
</TouchableOpacity>

        </View>
      )}
      {step == 3 && (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.main}>
            <TouchableOpacity onPress={decreaseStep}>
              <Image
                style={{position: 'absolute', right: 140, bottom: 10}}
                source={require('./HomePics/boutton.png')}
              />
            </TouchableOpacity>
            <Image style={{marginTop: 70}} source={require('./HomePics/abc.png')} />
            <Text style={styles.txt12}>Fast and responsibily</Text>
            <Text style={styles.txt1}> delivery by our courir </Text>
            <Text style={{marginTop: 10, fontSize: 14}}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
            <Text> adipiscing elit, sed do eiusmod tempor</Text>
            <Image source={require('./HomePics/a33.png')} style={{marginTop: 30}} />
            <TouchableOpacity style={styles.btnoir} onPress={movecreate}>
              <Text style={styles.txtblanc}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btblanc}
              onPress={() => {
                navigation.navigate({
                  key: 'Sign',
                  name: 'Sign',
                } as never);
              }}>
              <Text style={styles.txtnoir}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  txt1: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  txt12: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 120,
  },
  txt4: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt2: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  bt: {
    backgroundColor: '#FEC54B',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    marginTop: 80,
    marginBottom: 70,
  },
  btnoir: {
    backgroundColor: 'black',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    marginTop: 30,
  },
  btblanc: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    borderColor: 'black',
    borderBlockColor: 'black',
    marginTop: 20,
    borderWidth: 2,
  },
  txtblanc: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtnoir: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
