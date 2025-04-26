import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from './Components/Menu';

const Categories = () => {
    const [im,setim]=useState(0);
  const navigation = useNavigation();

  function press(){
    setim(1);
    setTimeout(() => {
        navigation.navigate({
            key: 'Fruits',
            name: 'Fruits',
          } as never);
          setim(0);

      }, 500); 
  }

 
  return(
    <SafeAreaView style={{flex:1}}>
        <View style={{backgroundColor:'white',height:'15%'}}>
        <View>
        <TouchableOpacity onPress={()=>{navigation.goBack();}}>
                <Image source={require('./CategoriesPics/f2.png')} style={{marginLeft:30,marginTop:30,}}/>
              </TouchableOpacity>
        </View>
        <View style={styles.top}>
            <Text style={styles.blacktxt}>Categories</Text>
        </View>
        </View>


        <ScrollView style={{backgroundColor:'lightgray',flex:1}}>

        <View style={{justifyContent:'center',flexDirection:'row',padding:20,gap:30}}>

            <View style={{flexDirection:'column',gap:30}}>
            <TouchableOpacity onPress={press}>
            <Image source={im===0? require('./CategoriesPics/p1.png'): require('./CategoriesPics/jaune.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p3.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p5.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p7.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity> 
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity> 
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity> 
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity> 
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>



            </View>

            <View style={{flexDirection:'column',gap:30}}>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p2.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p4.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p6.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p5.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./CategoriesPics/p1.png')}/>
            </TouchableOpacity>

          

            </View>

        </View>
        </ScrollView>
        <Menu />
    </SafeAreaView>

  );

};
const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        justifyContent:'center',
    
    },
    blacktxt:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
});
export default Categories;