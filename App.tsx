import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import Login from './login';
import Thanks from './Thanks';
import Tracking from './tracking';
import Home from './Home';
import Sign from './Sign';
import Fruits from './Fruits';
import Review from './Review';
import Order2 from './Order2';
import NewScreen from './NewScreen';
import Categories from './Categories';
import Order from './Order';
import Orange from './Orange';
import SettingsScreen from './SettingsScreen';
import ChangeNameScreen from './ChangeNameScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import Cart from './Cart';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tracking" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ChangeNameScreen" component={ChangeNameScreen} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Order2" component={Order2} />
        <Stack.Screen name="Orange" component={Orange} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Fruits" component={Fruits} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
        <Stack.Screen name="Thanks" component={Thanks} />
        <Stack.Screen name="Tracking" component={Tracking} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
