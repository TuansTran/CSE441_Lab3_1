import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddProductScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        images: [images],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Alert.alert('Product added successfully');
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error adding product');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a Product</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} placeholder="Enter title" value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} placeholder="Enter description" value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} placeholder="Enter price" value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Text style={styles.label}>Discount Percentage</Text>
      <TextInput style={styles.input} placeholder="Enter discount percentage" value={discountPercentage} onChangeText={setDiscountPercentage} keyboardType="numeric" />

      <Text style={styles.label}>Rating</Text>
      <TextInput style={styles.input} placeholder="Enter rating" value={rating} onChangeText={setRating} keyboardType="numeric" />

      <Text style={styles.label}>Stock</Text>
      <TextInput style={styles.input} placeholder="Enter stock" value={stock} onChangeText={setStock} keyboardType="numeric" />

      <Text style={styles.label}>Brand</Text>
      <TextInput style={styles.input} placeholder="Enter brand" value={brand} onChangeText={setBrand} />

      <Text style={styles.label}>Category</Text>
      <TextInput style={styles.input} placeholder="Enter category" value={category} onChangeText={setCategory} />

      <Text style={styles.label}>Images</Text>
      <TextInput style={styles.input} placeholder="Enter image URL(s)" value={images} onChangeText={setImages} />

      <Button title="SUBMIT" onPress={handleSubmit} color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000080',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  input: {
    height: 40,
    paddingLeft: 8,
    marginTop: 4,
    marginBottom: 12,
  },
});

export default AddProductScreen;
