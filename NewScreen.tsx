import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Menu from './Components/Menu';
const NewScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text>Good Morning</Text>
          <View style={styles.profileSection}>
            <Text style={styles.greetingText}>Rafatul Islam</Text>
            <TouchableOpacity>
              <Image source={require('./NewScreenPics/profilePicture.png')} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              <Image source={require('./NewScreenPics/card.png')} />
              <Image source={require('./NewScreenPics/card.png')} />
            </View>
          </ScrollView>

          <View style={styles.txt2}>
            <Text style={styles.categoryText}>Categories</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({
                  key: 'Categories',
                  name: 'Categories',
                } as never);
              }}>
              <Image source={require('./NewScreenPics/Group5.png')} />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.categoryImages}>
              <TouchableOpacity>
                <Image
                  source={require('./NewScreenPics/grp1.png')}
                  style={styles.categoryImage}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./NewScreenPics/grp2.png')}
                  style={styles.categoryImage}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./NewScreenPics/grp1.png')}
                  style={styles.categoryImage}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./NewScreenPics/grp2.png')}
                  style={styles.categoryImage}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./NewScreenPics/grp1.png')}
                  style={styles.categoryImage}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./NewScreenPics/grp2.png')}
                  style={styles.categoryImage}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./NewScreenPics/grp1.png')}
                  style={styles.categoryImage}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.center}>
            <View style={styles.trendingDealsHeader}>
              <Text style={styles.trendingDealsText}>Trending Deals</Text>
              <TouchableOpacity style={styles.groupImageContainer}>
                <Image source={require('./NewScreenPics/Group5.png')} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.scroll}>
                <View style={styles.sect1}>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item5.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item6.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item7.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item8.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item7.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item8.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.sect1}>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item5.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item6.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item7.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item8.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item7.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./NewScreenPics/item8.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.moreButtonContainer}>
            <TouchableOpacity style={styles.btnoir}>
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Menu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  scroll: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
  },
  sect1: {
    flexDirection: 'column',
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap: 30,
  },
  txt: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  txt2: {
    flexDirection: 'row',
    gap: 210,
    paddingLeft: 10,
    marginTop: 10,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    width:'100%',
  },
  categoryImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
  },
  categoryImage: {
    width: 60,
    height: 100,
    resizeMode: 'contain',
  },
  center: {
    alignItems: 'center',
    padding: 0,
  },
  trendingDealsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  trendingDealsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:20,
  },
  groupImageContainer: {
    marginRight: 20,
  },

  icon: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  moreButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  btnoir: {
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 30,
    padding: 15,
  },
  moreButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default NewScreen;
