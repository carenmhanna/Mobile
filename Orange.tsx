import React, { useState } from 'react';
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
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './navigation/types';

type OrangeScreenRouteProp = RouteProp<RootStackParamList, 'Orange'>;

const Orange = ({ route }: { route: OrangeScreenRouteProp }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<number>(1);
  const navigation = useNavigation();

  // Get the product passed from the previous screen
  const { product } = route.params;

  const handleAddToCart = () => {
    setIsModalVisible(false);
    navigation.navigate({
      key: 'Cart',
      name: 'Cart',
    } as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topImageContainer}>
        {/* Display the product image passed from the previous screen */}
        <ImageBackground
          style={styles.topImage}
          source={{ uri: product.pic }}  // Using the pic URL of the product
        >
          {/* Optional overlay for additional content, if needed */}
        </ImageBackground>
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.sectionTitle}>FRUITS</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./OrangePics/ic_close.png')} />
              </TouchableOpacity>
            </View>

            <Text style={styles.productTitle}>{product.name}</Text>

            <View style={styles.priceQuantityRow}>
              <Text style={styles.priceText}>${product.price}</Text>
              <View style={styles.quantityControls}>
                <TouchableOpacity onPress={() => setQuantity(prev => Math.max(prev - 1, 1))}>
                  <Image
                    source={require('./OrangePics/min.png')}
                    style={styles.quantityButton}
                  />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(prev => prev + 1)}>
                  <Image
                    source={require('./OrangePics/plus.png')}
                    style={styles.quantityButton}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.ratingsRow}>
              <Image
                source={require('./OrangePics/ratings.png')}
                style={styles.ratingIcon}
              />
              <Image source={require('./OrangePics/peoples.png')} />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.tabRow}>
                <TouchableOpacity onPress={() => setActiveTab(1)}>
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 1 && styles.activeTabText,
                    ]}
                  >
                    Description
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab(2)}>
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 2 && styles.activeTabText,
                    ]}
                  >
                    Review
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab(3)}>
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 3 && styles.activeTabText,
                    ]}
                  >
                    Discussion
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            <Image
              source={require('./OrangePics/tabIndicator.png')}
              style={styles.tabIndicator}
            />

            <ScrollView style={styles.tabContent}>
              <Text style={styles.tabContentText}>
                {activeTab === 1
                  ? product.description
                  : activeTab === 2
                  ? 'Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  : 'Discussion: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              </Text>
            </ScrollView>

            <View style={styles.bottomButtonsRow}>
              <TouchableOpacity style={styles.heartButton}>
                <Image source={require('./OrangePics/heart.png')} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Text style={styles.addToCartText}>
                  ADD TO CART {'\n'} ${quantity * product.price}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImageContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  topImage: {
    height: '60%',
    resizeMode: 'contain',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    width: '100%',
    height: 600,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  productTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 10,
  },
  priceQuantityRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    color: '#FEC54B',
    fontSize: 24,
    fontWeight: 'bold',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  quantityButton: {
    marginTop: 10,
  },
  quantityText: {
    color: '#FEC54B',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingsRow: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    gap: 80,
  },
  ratingIcon: {
    marginTop: 17,
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: 25,
    gap: 35,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 22,
    color: 'gray',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: 'black',
  },
  tabIndicator: {
    marginTop: 5,
  },
  tabContent: {
    height: '25%',
    marginTop: 10,
  },
  tabContentText: {
    fontSize: 16,
    color: 'black',
    lineHeight: 22,
  },
  bottomButtonsRow: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heartButton: {
    backgroundColor: '#12B76A',
    padding: 20,
    borderRadius: 40,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    backgroundColor: '#FEC54B',
    padding: 20,
    borderRadius: 30,
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Orange;
