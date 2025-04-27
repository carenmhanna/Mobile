import React from 'react';
import { Text, Image, StyleSheet, ImageSourcePropType, View } from 'react-native';

interface ImageBoxProps {
  imageSource: ImageSourcePropType; // Type for image source
  textOne: string; // First text
  textTwo: string; // Second text
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageSource, textOne, textTwo }) => {
  return (
    <View style={styles.box}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.textOne}>{textOne}</Text>
      <Text style={styles.textTwo}>{textTwo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Android shadow
    
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textOne: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  textTwo: {
    fontSize: 14,
    color: '#FFA500', // Orange color
    marginTop: 5,
  },
});

export default ImageBox;
