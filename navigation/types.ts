// src/navigation/types.ts
export type RootStackParamList = {
    Fruits: undefined; // No parameters for the Fruits screen
    Orange: { product: any }; // Orange screen expects a `fruitName` parameter
    Cart: { item: Product };
    
  };

import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category:string;
  pic: ImageSourcePropType;  // This is important to define the image type correctly
  quantity: number;
}

// src/navigation/types.ts

// Define the CartItem type to include 'pic'
export interface CartItem {
  id: string;          // or number, depending on your data type
  pic: string;         // or image source if you're using an image object
  name: string;
  price: number;
  description: string;
  quantity: number;
}



