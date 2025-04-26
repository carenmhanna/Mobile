import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from './Components/Menu';
import Item from './Components/Item';

const Cart = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Item details</Text>
        <TouchableOpacity onPress={() => {
         navigation.navigate({
      key: 'Order',
      name: 'Order',
    } as never);
        }}>
          <Text style={styles.orderText}>Place order</Text>
        </TouchableOpacity>
      </View>


      <ScrollView>
      <Item pic={require( './CartPics/placeholder(1).png')} name='Banana' price={23} />
      <Item pic={require('./CartPics/placeholder(2).png')} name='Broccoli' price={30} />
      <Item pic={require('./CartPics/placeholder(1).png')} name='Banana' price={23} />
      <Item pic={require('./CartPics/placeholder(1).png')} name='Banana' price={23} />
      <Item pic={require('./CartPics/placeholder(1).png')} name='Banana' price={23} />
      <Item pic={require('./CartPics/placeholder(1).png')} name='Banana' price={23} />
      <Item pic={require('./CartPics/placeholder(1).png')} name='Banana' price={23} />
      <Item pic={require('./CartPics/placeholder(1).png')} name='Banana' price={23} />
      <Item pic={require('./CartPics/placeholder(1).png')} name='Banana' price={23} />



      </ScrollView>

      <View style={styles.menuItem}>
      <Menu />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  header: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 100,
    gap: 140,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderText: {
    color: '#E67F1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
});

export default Cart;
