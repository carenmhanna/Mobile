import React, { useState } from 'react';
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
  const [im, setIm] = useState(0);
  const navigation = useNavigation();

  function press() {
    setIm(1);
    setTimeout(() => {
      navigation.navigate({
        key: 'Fruits',
        name: 'Fruits',
      } as never);
      setIm(0);
    }, 500);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ justifyContent: 'center', flexDirection: 'column', flex: 1 }}>
        
        <View style={{ backgroundColor: 'white', height: '15%' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('./CategoriesPics/f2.png')}
              style={{ marginLeft: 30, marginTop: 30 }}
            />
          </TouchableOpacity>
          <View style={styles.top}>
            <Text style={styles.blacktxt}>Categories</Text>
          </View>
        </View>

        {/* ScrollView with centered content */}
        <ScrollView contentContainerStyle={styles.scrollContent} style={{ backgroundColor: 'lightgray' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', padding: 20, gap: 30 }}>
              {/* Left Column */}
              <View style={{ flexDirection: 'column', gap: 30 }}>
                <TouchableOpacity onPress={press}>
                  <Image source={im === 0 ? require('./CategoriesPics/p1.png') : require('./CategoriesPics/jaune.png')} />
                </TouchableOpacity>
                <TouchableOpacity><Image source={require('./CategoriesPics/p3.png')} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('./CategoriesPics/p5.png')} /></TouchableOpacity>
              </View>

              {/* Right Column */}
              <View style={{ flexDirection: 'column', gap: 30 }}>
                <TouchableOpacity><Image source={require('./CategoriesPics/p2.png')} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('./CategoriesPics/p4.png')} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('./CategoriesPics/p6.png')} /></TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ height: 20 }} />
        </ScrollView>

        <Menu />
      </View>
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
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // Vertically centers the content
    alignItems: 'center', // Horizontally centers the content
  },
});

export default Categories;
