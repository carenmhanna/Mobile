import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';

interface ItemProps {
  pic: ImageSourcePropType;
  name:string;
  price:number;
}

const Item: React.FC<ItemProps> = ({ pic,name,price,}) => {
  const [nb, setNb] = useState(0);
  const [seen,setseen]=useState<boolean>(true);

  return (
    <SafeAreaView>
        {seen? 
      (<ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.scrollView}>
        <View style={styles.item}>
          <Image source={pic} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text>Fruits</Text>
            <Text style={styles.itemTitle}>{name}</Text>
            <Text style={styles.itemPrice}>{price}$</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => setNb(nb === 0 ? 0 : nb - 1)}>
              <Image source={require('./ItemPics/min2.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{nb}</Text>
            <TouchableOpacity onPress={() => setNb(nb + 1)}>
              <Image source={require('./ItemPics/plus.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.trashContainer}>
          <TouchableOpacity style={styles.trashButton} onPress={()=>{setseen(false)}}>
            <Image source={require('./ItemPics/trash-bin.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>)
      : <View></View>
}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginBottom: 5,
    alignItems: 'center',
    gap: 40,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemInfo: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  itemTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#E67F1E',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  quantity: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  trashContainer: {
    backgroundColor: 'black',
    width: 120,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  trashButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Item;
