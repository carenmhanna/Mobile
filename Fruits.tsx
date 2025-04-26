import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from './Components/Menu';

const Fruits = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FEC54B' }}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('./FruitsPics/f1.png')} style={{ marginLeft: 25, marginTop: 30 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('./FruitsPics/ic_filter.png')} style={{ marginLeft: 10, marginTop: 30,marginRight:33, }} />
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 30, marginTop: 70 }}>
          <Text style={styles.blacktxt}>Fruits Category</Text>
          <Text style={{ color: 'black', marginTop: 10, fontSize: 14, fontWeight: 'bold' }}>
            87 Items
          </Text>
        </View>
      </View>

        < View style={{flex:1}}>
        <View style={styles.ViewContainer}>
          <View style={styles.modalContent}>
            <View style={{height:70,backgroundColor:'#F0F0F0',borderRadius:20,width:350,paddingLeft:20,paddingVertical:10,flexDirection:'row',gap:200,}}>
            <TextInput placeholder="Search Here" /> 
            <TouchableOpacity>
                <Image source={require('./FruitsPics/ic_search.png')} style={{marginTop:15,}}  />
            </TouchableOpacity>
            </View>
            <ScrollView style={{width:'100%',marginTop:15,}}>
                <View style={{flex:1,flexDirection:'row',gap:25,paddingHorizontal:5,justifyContent:'center',}}>

                    <View style={{flexDirection:'column',gap:10}}>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/a1.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ navigation.navigate({
      key: 'Orange',
      name: 'Orange',
    } as never);}}>
                    <Image source={require('./FruitsPics/orange.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/tomates.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/pp.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/pommes.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/ananas.png')}  />
                    </TouchableOpacity>
                  
                    
                    </View >

                    <View style={{flexDirection:'column',gap:10}}>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/a4.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/banana.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/grapes.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/stra.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/o12.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('./FruitsPics/m12.png')}  />
                    </TouchableOpacity>
                   
                    
                    </View>
                </View>
            </ScrollView>
        </View>
        </View>
      </View>
      
     <Menu/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  blacktxt: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  ViewContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    height:'145%',
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius:30,
  },
});

export default Fruits;
