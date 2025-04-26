import React, { useState,useRef } from 'react';
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


const Order = () => {

  const [listv,setlistv]=useState<boolean>(false);
  const navigation = useNavigation();
  const [checked,setchecked]=useState<boolean>(false);
  const [text,settext]=useState<string>("Choose your country");
  function checkb(){
    if (checked==true){
      setchecked(false);
    }
    else{
      setchecked(true);
    }
  }
  const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]);

  function touched(){
    if (listv==true){
      setlistv(false);
    }
    else{
      setlistv(true);
    }
    settext('select your country');
  }
 
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{flexDirection:'row',gap:100,justifyContent:'flex-start',}}>
        <View>
        <TouchableOpacity onPress={()=>{navigation.goBack();}}>
                <Image source={require('./OrderPics/f2.png')} style={{marginLeft:30,marginTop:30,}}/>
              </TouchableOpacity>
        </View>
      <Text style={{color:'black',fontWeight:'bold',fontSize:25,marginTop:40}}>Checkout</Text>
      </View>

      <View>
      <Image source={require('./OrderPics/borderBot.png')} style={{marginLeft:30,marginTop:30,}}/>
      </View>

      <View style={{backgroundColor:'#F2F2F2',paddingVertical:20,justifyContent:'center',alignItems:'center',marginBottom:20,marginTop:10}}>
      <Image source={require('./OrderPics/stepper.png')}/>
      </View>

      <View style={{justifyContent:'center',alignContent:'center',paddingHorizontal:30, marginTop:10}}>
        <Text style={{color:'black',fontSize:14,marginBottom:5,fontWeight:'bold',}}>
          Full Name
        </Text>
        <View style={styles.input}>
        <TextInput placeholder="Rafatul Islam" />

        </View>
      </View>

      <View style={{justifyContent:'center',alignContent:'center',paddingHorizontal:30,marginTop:10}}>
        <Text style={{color:'black',fontSize:14,marginBottom:5,fontWeight:'bold',}}>
        Email Address
        </Text>
        <View style={styles.input}>
        <TextInput placeholder='rafatul3588@gmail.com' />

        </View>
      </View>
     

      <View style={{justifyContent:'center',alignContent:'center',paddingHorizontal:30,marginTop:10}}>
        <Text style={{color:'black',fontSize:14,marginBottom:5,fontWeight:'bold',}}>
          Phone
        </Text>
        <View style={styles.input}>
        <TextInput placeholder="+880 1617202070" />

        </View>
      </View>
     

      <View style={{justifyContent:'center',alignContent:'center',paddingHorizontal:30,marginTop:10}}>
        <Text style={{color:'black',fontSize:14,marginBottom:5,fontWeight:'bold',}}>
          Address
        </Text>
        <View style={styles.input}>
        <TextInput placeholder="Type your home address" />

        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:20,}}>
        <View style={{justifyContent:'center',alignContent:'center',paddingHorizontal:30,marginTop:10}}>
        <Text style={{color:'black',fontSize:18,marginBottom:5,fontWeight:'bold',}}>
          Zip Code
        </Text>
        <View style={styles.input2}>
        <TextInput placeholder="Enter here" />
        </View>
        </View>

        <View style={{justifyContent:'flex-start',alignContent:'flex-start',marginTop:10}}>
        <Text style={{color:'black',fontSize:18,marginBottom:5,fontWeight:'bold',}}>
          City
        </Text>
        <View style={styles.input2}>
        <TextInput placeholder="Enter here" />

        </View>
        
        </View>
      </View>


      <View style={{flexDirection:'column',padding:30,}}>
        <Text style={{color:'black',fontSize:20,marginBottom:5,fontWeight:'bold',}}>Country</Text>
        <View style={{flexDirection:'row',borderRadius:30,borderWidth:1,padding:10,borderColor:'grey',marginTop:10,}}>
          <TextInput placeholder={text} />
          <TouchableOpacity onPress={touched}>
          <Image source={require('./OrderPics/fle.png')} style={{marginTop:22, position:'absolute',left:150,}}/>
          </TouchableOpacity>

        </View>
        {
          listv===true?
            <ScrollView style={{flexDirection:'column',borderWidth:1,borderRadius:30,borderColor:'#E67F1E',}} showsVerticalScrollIndicator={true}>

            <TouchableOpacity style={{borderBottomWidth:1,borderColor:'grey',paddingVertical:10,paddingHorizontal:140,}} onPress={()=>{settext('Canada')}}>
              <Text>Canada</Text>
            </TouchableOpacity>
          

            
            <TouchableOpacity style={{borderBottomWidth:1,borderColor:'grey',paddingVertical:10,paddingHorizontal:140,}} onPress={()=>{settext('Lebanon')}}>
              <Text>Lebanon</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={{borderBottomWidth:1,borderColor:'grey',paddingVertical:10,paddingHorizontal:140,}} onPress={()=>{settext('France')}}>
              <Text>France</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{borderBottomWidth:1,borderColor:'grey',paddingVertical:10,paddingHorizontal:140,}} onPress={()=>{settext('UK')}}>
              <Text>UK</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={{borderBottomWidth:1,borderColor:'grey',paddingVertical:10,paddingHorizontal:140,}} onPress={()=>{settext('USA')}}>
              <Text>USA</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{borderBottomWidth:1,borderColor:'grey',paddingVertical:10,paddingHorizontal:140,}} onPress={()=>{settext('Dubai')}}>
              <Text>Dubai</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{borderColor:'grey',paddingVertical:10,paddingHorizontal:140,}}  onPress={()=>{settext('Lebanon')}}>
              <Text>Lebanon</Text>
            </TouchableOpacity>



            </ScrollView>
          :
          <View>
            </View>
        }
        


        
<View style={{ marginTop: 20 }}>
<Text style={{color:'black',fontSize:20,marginBottom:5,fontWeight:'bold',}}>Country</Text>
<DropDownPicker
  open={open}
  value={value}
  items={items}
  setOpen={setOpen}
  setValue={setValue}
  setItems={setItems}
  placeholder="Choose your country"
  style={{borderRadius:30,marginTop:10,padding:10,}}
  
/>
</View>

      </View>

     

      <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:10,paddingHorizontal:35,marginTop:20,}}>
        <TouchableOpacity onPress={checkb}>
          {
            checked===false ?
            <Image source={require('./OrderPics/check.png')}/>
            :
            <Image source={require('./OrderPics/ic_check.png')}/>
          }
        </TouchableOpacity>
          <Text style={{color:'black',fontSize:16,marginBottom:5,fontWeight:'bold',}}>Save shipping address</Text>
      </View>


      

      <View>
      <Image source={require('./OrderPics/borderBot.png')} style={{marginLeft:30,marginTop:10,}}/>
      </View>

      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.btorange} onPress={()=>{navigation.navigate({
      key: 'Order2',
      name: 'Order2',
    } as never);}}>
        <Text style={{color:'black',fontSize:20,marginBottom:5,fontWeight:'bold',textAlign:'center'}}>NEXT</Text>
      </TouchableOpacity>
      </View>
     
      
      </ScrollView>
    </SafeAreaView>
  );

};


const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:40,
    borderColor:'grey',
    padding:10,
  },

  input2:{
    borderWidth:1,
    borderRadius:40,
    borderColor:'grey',
    paddingVertical:10,
    paddingHorizontal:45,
  },
  btorange: {
    backgroundColor: 'orange',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    marginBottom: 10,
    marginTop: 30,
    height: 70,
  },
});

export default Order;