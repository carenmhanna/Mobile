import React, { useState } from 'react';
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
  
  // List of fruits
  const fruitsList = [
    { name: 'Avocado', image: require('./FruitsPics/a1.png') },
    { name: 'Banana', image: require('./FruitsPics/banana.png') },
    { name: 'Orange', image: require('./FruitsPics/orange.png') },
    { name: 'Strawberries', image: require('./FruitsPics/stra.png') },
    { name: 'Blueberries', image: require('./FruitsPics/o12.png') },
    { name: 'Apples', image: require('./FruitsPics/pommes.png') },
    { name: 'Papaya', image: require('./FruitsPics/pp.png') },
    { name: 'Ananas', image: require('./FruitsPics/ananas.png') },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(fruitsList);

  // Handle search input change
  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      const filtered = fruitsList.filter(fruit =>
        fruit.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredFruits(filtered);
    } else {
      setFilteredFruits(fruitsList);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FEC54B' }}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('./FruitsPics/f1.png')}
              style={{ marginLeft: 25, marginTop: 30 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 30, marginTop: 70 }}>
          <Text style={styles.blacktxt}>Fruits Category</Text>
          <Text style={{ color: 'black', marginTop: 10, fontSize: 14, fontWeight: 'bold' }}>
            {filteredFruits.length} Items
          </Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.ViewContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                height: 70,
                backgroundColor: '#F0F0F0',
                borderRadius: 20,
                width: 350,
                paddingLeft: 20,
                paddingVertical: 10,
                flexDirection: 'row',
                gap: 200,
              }}
            >
              <TextInput
                placeholder="Search Here"
                value={searchQuery}
                onChangeText={handleSearch}
              />
              <TouchableOpacity>
                <Image
                  source={require('./FruitsPics/ic_search.png')}
                  style={{ marginTop: 15 }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%', marginTop: 15 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  gap: 25,
                  paddingHorizontal: 5,
                  justifyContent: 'center',
                }}
              >
                {/* Left Column */}
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  {filteredFruits.slice(0, Math.ceil(filteredFruits.length / 2)).map(fruit => (
                    <TouchableOpacity key={fruit.name}>
                      <Image source={fruit.image} />
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Right Column */}
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  {filteredFruits.slice(Math.ceil(filteredFruits.length / 2)).map(fruit => (
                    <TouchableOpacity key={fruit.name}>
                      <Image source={fruit.image} />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    height: '145%',
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default Fruits;
