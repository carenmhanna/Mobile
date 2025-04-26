import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Menu from './Components/Menu';

const Orange = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const [nb, setnb] = useState<number>(0);
  const [txt, settxt] = useState<number>(1);


  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          alignContent: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <ImageBackground style={styles.imtop} source={require('./OrangePics/picd.webp')}>
        </ImageBackground>

      </View>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View>
              <View style={{flexDirection:"row",gap:250}}>
              <Text style={{color:'black',fontWeight:'bold',textAlign:'left'}}>FRUITS</Text>
              <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <Image source={require('./OrangePics/ic_close.png')}  />
              </TouchableOpacity>
              </View>
              <Text style={{color:'black',fontWeight:'bold',textAlign:'left',fontSize:26}}>Fresh Orange</Text>

            </View>

            <View style={{flexDirection:'row',marginTop:20,gap:200}}>
              <Text style={{color:'#FEC54B',fontSize:24,fontWeight:'bold',}}>$4.9</Text>
              <View style={{flexDirection:'row',gap:20,marginTop:4,}}>
                <TouchableOpacity onPress={()=>{nb===0 ? setnb(0) : setnb(nb-1)}}>
                <Image source={require('./OrangePics/min.png')} style={{marginTop: 15,}} />
                </TouchableOpacity>
                <Text style={{color:'#FEC54B',fontSize:24,fontWeight:'bold'}}>{nb}</Text>
                <TouchableOpacity onPress={()=>{setnb(nb+1)}}  >
                <Image source={require('./OrangePics/plus.png')} style={{marginTop: 10,}} />
                </TouchableOpacity>
              </View>

            </View>
            <View style={{marginTop:20,flexDirection:'row',gap:80,}}>
              <Image source={require('./OrangePics/ratings.png')}  style={{marginTop:17,}}/>
              <Image source={require('./OrangePics/peoples.png')}  />

              </View>

         
                <ScrollView horizontal>
                <View style={{flexDirection:'column',gap:10,}}>
                  <View style={{marginTop:25,flexDirection:'row',gap:35,}}>
                    <TouchableOpacity onPress={()=>settxt(1)}>
                    <Text style={[{ fontSize: 22 }, txt === 1 ? { fontWeight: 'bold',color:'black' } : { fontWeight: 'normal' }]}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>settxt(2)} >
                    <Text style={[{ fontSize: 22 }, txt === 2 ? { fontWeight: 'bold',color:'black' } : { fontWeight: 'normal' }]}>Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>settxt(3)}>
                    <Text style={[{ fontSize: 22 }, txt === 3 ? { fontWeight: 'bold',color:'black' } : { fontWeight: 'normal' }]}>Discussion</Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={require('./OrangePics/tabIndicator.png')}  />
                  </View>
                  
                </ScrollView>


                <ScrollView style={{height:'25%',}}>
                  <View style={{flexWrap:'wrap',flexDirection:'column',}}>
                   
                      {txt===1 ?
                       <Text style={{fontSize:16,color:'black',}}>
                    Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do eiusmod tempor  {'\n'} incididunt ut labore et dolore magna aliqua. {'\n'}Ut enim ad minim veniam, quis nostrud  {'\n'} exercitation ullamco laboris nisi ut aliquip ex  {'\n'}ea commodo consequat. {'\n'} eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'} Ut enim ad minim veniam
                    Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do eiusmod tempor  {'\n'} incididunt ut labore et dolore magna aliqua. {'\n'}Ut enim ad minim veniam, quis nostrud  {'\n'} exercitation ullamco laboris nisi ut aliquip ex  {'\n'}ea commodo consequat. {'\n'} eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'} Ut enim ad minim veniam
                    </Text>
                    :
                    txt===2?
                    <Text style={{fontSize:16,color:'black',}}>
                    Review Lorem ipsum dolor amet, consectetur {'\n'} adipiscing elit, sed do eiusmod tempor  {'\n'} incididunt ut labore et dolore magna aliqua. {'\n'}Ut enim ad minim veniam, quis nostrud  {'\n'} exercitation ullamco laboris nisi ut aliquip ex  {'\n'}ea commodo consequat. {'\n'} eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'} Ut enim ad minim veniam
                    Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do eiusmod tempor  {'\n'} incididunt ut labore et dolore magna aliqua. {'\n'}Ut enim ad minim veniam, quis nostrud  {'\n'} exercitation ullamco laboris nisi ut aliquip ex  {'\n'}ea commodo consequat. {'\n'} eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'} Ut enim ad minim veniam
                    </Text>
                    :
                    <Text style={{fontSize:16,color:'black',}}>
                    Discussion Lorem ipsum dolor amet, consectetur {'\n'} adipiscing elit, sed do eiusmod tempor  {'\n'} incididunt ut labore et dolore magna aliqua. {'\n'}Ut enim ad minim veniam, quis nostrud  {'\n'} exercitation ullamco laboris nisi ut aliquip ex  {'\n'}ea commodo consequat. {'\n'} eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'} Ut enim ad minim veniam
                    Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do eiusmod tempor  {'\n'} incididunt ut labore et dolore magna aliqua. {'\n'}Ut enim ad minim veniam, quis nostrud  {'\n'} exercitation ullamco laboris nisi ut aliquip ex  {'\n'}ea commodo consequat. {'\n'} eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'} Ut enim ad minim veniam
                    </Text>
                      }
                  
                  </View>


                </ScrollView>

                <View style={{flexDirection:'row',gap:35,marginTop:15,}}>
                <TouchableOpacity style={{backgroundColor:'#12B76A',justifyContent:'center',padding:20,borderRadius:40,width:'30%',alignItems:'center'}}>
                <Image source={require('./OrangePics/heart.png')}  />
                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor:'#FEC54B',justifyContent:'center',padding:20,borderRadius:30,width:'60%'}} onPress={()=>{ 
                    setIsModalVisible(false);
                    navigation.navigate({
      key: 'Cart',
      name: 'Cart',
    } as never);}}>
                    <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:16,}}>
                      ADD TO CART {'\n'} $70.7
                    </Text>
                  </TouchableOpacity>
                </View>

               <Menu/>
             
          </View>
          
        </View>
      </Modal>

      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txt2: {
    fontSize: 24,
    color: '#E67F1E',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: '#E67F1E',
    marginBottom: 10,
    height: 55,
  },
  imtop: {
    height:'60%',
    resizeMode:'contain',
  },
 
  container: {
    flex: 1,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
 
  modalContainer: {
    width: '100%',
    height: 600,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    borderRadius: 30,
    paddingTop:20
  },
 
});

export default Orange;


