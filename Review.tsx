import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bar from './Components/Bar';
import Button from './Components/Button';

const Review = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1,}}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Bar pic={require('./ReviewPics/ic_close2.png')} text="Write Reviews" />

          <View style={styles.centered}>
            <Text style={styles.title}>Tell Us To Improve</Text>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur{'\n'} adipiscing elit, sed do
              eiusmod
            </Text>

            <Text style={styles.rating}>5.0</Text>
            <Image source={require('./ReviewPics/stars.png')} style={styles.stars} />

            <Text style={styles.feedbackPrompt}>
              Let us Know what you think
            </Text>
          </View>

          <View style={styles.input}>
            <TextInput
              placeholder="Write your review here"
              multiline
              textAlignVertical="top"
              style={{ flex: 1, color: 'black' }}
            />
          </View>

          <View>
            <Image
              source={require('./ReviewPics/borderBot.png')}
              style={{ marginLeft: 30, marginTop: 15 }}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NewScreen' as never)}
          >
            <Text style={{color:'black',fontSize:20,marginBottom:5,fontWeight:'bold',textAlign:'center'}}>
            DONE
            </Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FEC54B',
    width: '90%',
    borderRadius: 30,
    paddingHorizontal: 90,
    paddingVertical:20,
    marginBottom: 10,
    marginTop: 20,
    height: 70,
  },
  centered: {
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  rating: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 20,
    textAlign: 'center',
  },
  stars: {
    marginLeft: 80,
  },
  feedbackPrompt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 50,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 150,
    marginHorizontal: 30,
    marginTop: 10,
    borderColor: '#E67F1E',
  },
});

export default Review;
