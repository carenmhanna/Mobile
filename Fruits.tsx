import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ImageBox from './Components/ImageBox'; // Import the ImageBox component

// Define the navigation types for the stack
type RootStackParamList = {
  Orange: { product: any }; // Define the product parameter type for the Orange screen
};

const Fruits = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const fruitsList = [
    { name: 'Avocado', image: require('./FruitsPics/a1.png'), screen: 'Orange' },
    { name: 'Banana', image: require('./FruitsPics/banana.png'), screen: 'Orange' },
    { name: 'Orange', image: require('./FruitsPics/orange.png'), screen: 'Orange' },
    { name: 'Strawberries', image: require('./FruitsPics/stra.png'), screen: 'Orange' },
    { name: 'Blueberries', image: require('./FruitsPics/o12.png'), screen: 'Orange' },
    { name: 'Apples', image: require('./FruitsPics/pommes.png'), screen: 'Orange' },
    { name: 'Papaya', image: require('./FruitsPics/pp.png'), screen: 'Orange' },
    { name: 'Ananas', image: require('./FruitsPics/ananas.png'), screen: 'Orange' },
  ];

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.36:5000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Save products from backend
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

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
          <TouchableOpacity onPress={() => navigation.navigate('NewScreen' as never)}>
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
                  gap: 15,
                  paddingHorizontal: 5,
                  justifyContent: 'center',
                }}
              >
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  {products.slice(0, Math.ceil(products.length / 2)).map(product => (
                    <TouchableOpacity
                      key={product._id}
                      onPress={() => navigation.navigate('Orange', { product: product })}
                    >
                      <ImageBox
                        imageSource={{ uri: product.imageUrl }}
                        textOne={product.name}
                        textTwo="View Details"
                      />
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={{ flexDirection: 'column', gap: 10 }}>
                  {products.slice(Math.ceil(products.length / 2)).map(product => (
                    <TouchableOpacity
                      key={product._id}
                      onPress={() => navigation.navigate('Orange', { product: product })}
                    >
                      <ImageBox
                        imageSource={{ uri: product.imageUrl }}
                        textOne={product.name}
                        textTwo="View Details"
                      />
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