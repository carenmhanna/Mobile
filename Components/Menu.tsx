import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface ItemProps {
  pic1?: ImageSourcePropType;
  pic2?: ImageSourcePropType;
  pic3?: ImageSourcePropType;
}

const Menu: React.FC<ItemProps> = ({
  pic1 = require('./Menu/item(12).png'),
  pic3 = require('./Menu/item2.png'),
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => { navigation.navigate('NewScreen' as never); }}>
          <Image source={pic1} style={styles.menuItem} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate({ key: 'Cart', name: 'Cart' } as never); }}>
          <Image source={pic3} style={styles.menuItem} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('SettingsScreen' as never); }}>
          <Image source={pic3} style={styles.menuItem} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the SafeAreaView takes up the full screen
  },
  menu: {
    position: 'absolute', // This will fix the menu at the bottom
    bottom: 0, // Position the menu at the bottom
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures equal spacing between items
    alignItems: 'center', // Vertically centers the items
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white', // Background color set to white
    borderRadius: 20, // Rounded corners
    borderWidth: 2, // Border width
    borderColor: 'gray', // Border color gray
  },
  menuItem: {
    marginHorizontal: 10, // Equal margin between all menu items
    width: 70, // Increased width for larger images
    height: 70, // Increased height for larger images
    resizeMode: 'contain', // Ensure the image scales down proportionally
  },
});

export default Menu;
