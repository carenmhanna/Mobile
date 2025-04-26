import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageSourcePropType,

} from 'react-native';

interface ItemProps {
  pic1?: ImageSourcePropType;
  pic2?: ImageSourcePropType;
  pic3?: ImageSourcePropType;
}


const Menu: React.FC<ItemProps> = ({ pic1=require('./Menu/item(12).png'),pic2=require('./Menu/item2.png'),pic3=require('./Menu/item2.png')}) =>{
    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <View style={styles.menu}>
            <TouchableOpacity onPress={()=>{navigation.navigate({
      key: 'Newscreen',
      name: 'Newscreen',
    } as never);}}>
              <Image source={pic1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={pic2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate({
      key: 'Cart',
      name: 'Cart',
    } as never);}}>
              <Image source={pic3} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./Menu/item3.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./Menu/placeholder.png')} style={{marginTop:18}}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

    );
};


const styles=StyleSheet.create({
    menu:{
        flexDirection:'row',
        paddingLeft:10,
        gap:10,
        paddingVertical:10,
        backgroundColor:'white',
    },
});



export default Menu;