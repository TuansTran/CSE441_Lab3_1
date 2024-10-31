import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProductDetailScreen = () => {
    const [data, setData] = useState(null);
    const filePath = 'https://dummyjson.com/products/2';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.json();
            })
            .then((d) => {
                setData(d);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!data) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Product Detail</Text>
            <Image source={{ uri: data.thumbnail }} style={styles.productImage} />
            <Text style={styles.productTitle}>Title: {data.title}</Text>
            <Text style={styles.productDescription}>Description: {data.description}</Text>
            <Text style={styles.productDetails}>Price: ${data.price}</Text>
            <Text style={styles.productDetails}>Discount: {data.discountPercentage}%</Text>
            <Text style={styles.productDetails}>Rating: {data.rating} stars</Text>
            <Text style={styles.productDetails}>Stock: {data.stock} units</Text>
            <Text style={styles.productDetails}>Brand: {data.brand}</Text>
            <Text style={styles.productDetails}>Category: {data.category}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
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
    productImage: {
        height: 200,
        width: '100%',
        borderRadius: 8,
        marginBottom: 16,
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    productDescription: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    productDetails: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 16,
    },
    deleteButton: {
        backgroundColor: '#6200EE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 8,
    },
    cancelButton: {
        backgroundColor: '#6200EE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductDetailScreen;
