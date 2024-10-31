import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

const SearchProductScreen = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const searchProduct = () => {
        let filePath = 'https://dummyjson.com/products';
        if (value !== '') {
            filePath = `https://dummyjson.com/products/search?q=${value}`;
        }
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products || []);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const renderProduct = ({ item }) => (
        <View style={styles.productCard}>
            <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
            <Text style={styles.productTitle}>Title: {item.title}</Text>
            <Text style={styles.productDescription}>Description: {item.description}</Text>
            <Text style={styles.productDetails}>Price: ${item.price}</Text>
            <Text style={styles.productDetails}>Discount: {item.discountPercentage}%</Text>
            <Text style={styles.productDetails}>Rating: {item.rating} stars</Text>
            <Text style={styles.productDetails}>Stock: {item.stock} units</Text>
            <Text style={styles.productDetails}>Brand: {item.brand}</Text>
            <Text style={styles.productDetails}>Category: {item.category}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Search Products</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter product name"
                value={value}
                onChangeText={setValue}
            />
            <Button title="SEARCH" onPress={searchProduct} color="#007AFF" />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProduct}
                contentContainerStyle={styles.productList}
            />
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
    input: {
        height: 40,
        paddingLeft: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    productList: {
        paddingTop: 16,
    },
    productCard: {
        padding: 16,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        marginBottom: 16,
    },
    productImage: {
        height: 200,
        width: '100%',
        borderRadius: 8,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    productDetails: {
        fontSize: 14,
        color: '#333',
        marginTop: 4,
    },
});

export default SearchProductScreen;
