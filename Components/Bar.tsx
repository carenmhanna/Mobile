import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface ItemProps {
 text:string;
 pic:ImageSourcePropType;

}

const Bar: React.FC<ItemProps> = ({ text,pic}) => {

    const navigation = useNavigation();
    
    return(
        <SafeAreaView>
             <View style={{flexDirection:'row',gap:70,justifyContent:'flex-start',}}>
        <View>
        <TouchableOpacity onPress={()=>{navigation.goBack();}}>
                <Image source={pic} style={{marginLeft:30,marginTop:30,}}/>
              </TouchableOpacity>
        </View>
      <Text style={{color:'black',fontWeight:'bold',fontSize:25,marginTop:40,}}>{text}</Text>
      </View>

      
      <View>
      <Image source={require('./Pics/borderBot.png')} style={{marginLeft:30,marginTop:30,}}/>
      </View>
      
        </SafeAreaView>
    );
};


export default Bar;