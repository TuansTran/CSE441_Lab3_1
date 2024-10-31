import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProductList from './Product/Product.js';
import Product_Add from './Product/Product_add.js';
import ProductSearch from './Product/Product_Search.js';
import ProductDetail from './Product/Product_Detail.js';

export default function App() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'productList', title: 'Products', focusedIcon: 'folder' },
        { key: 'productAdd', title: 'Add', focusedIcon: 'plus' },
        { key: 'productSearch', title: 'Search', focusedIcon: 'magnify' },
        { key: 'productDetail', title: 'Detail', focusedIcon: 'information' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        productList: ProductList,
        productAdd: Product_Add,
        productSearch: ProductSearch,
        productDetail: ProductDetail,
    });

    return (
        <SafeAreaProvider>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </SafeAreaProvider>
    );
}