import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { products } from '../data/products'; // Создай этот массив данных по методичке
import { ProductItem } from '../components/ProductItem';

export function ProductListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem 
            product={item} 
            onPress={() => navigation.navigate('ProductDetail', { product: item })} 
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' }
});