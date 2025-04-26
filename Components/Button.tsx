import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface ItemProps {
  text:string;
  color:string;
  screen:string;
  textcolor:string;
 }
 
 const Button: React.FC<ItemProps> = ({ text,color,screen,textcolor,}) => {
 
     const navigation = useNavigation();
     return (
      <SafeAreaView>
          <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity  style={[styles.button, { backgroundColor: color }]} onPress={()=>{navigation.navigate({
      key: {screen},
      name: {screen},
    } as never);}}>
        <Text style={{color:textcolor,fontSize:20,marginBottom:5,fontWeight:'bold',textAlign:'center'}}>{text}</Text>
      </TouchableOpacity>
      </View>

      </SafeAreaView>
     );
    };

const styles = StyleSheet.create({
      button: {
        width: '90%',
        borderRadius: 30,
        paddingHorizontal: 90,
        paddingVertical:20,
        marginBottom: 10,
        marginTop: 20,
        height: 70,
      },
    });
export default Button;
  
