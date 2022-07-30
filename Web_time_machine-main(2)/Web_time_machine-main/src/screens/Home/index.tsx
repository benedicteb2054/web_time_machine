//import liraries
import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import SearchBar from '../../components/SearchBar';
import WebUrlItem from '../../components/WebUrlItm';
import { searchUrl, webUrlSelector } from '../../features/wayback/webUrlSlice';

import { styles } from './style';

// create a component
const HomeScreen = () => {

    const dispatch: AppDispatch = useDispatch()
    const { data, error, status } = useSelector(webUrlSelector)
    const [searchTerm, setSearchTerm] = useState('')

    const onSearch = () => {
        dispatch(searchUrl(searchTerm))
    }

    return (
        <View style={styles.container}>
            <SearchBar 
                onChangeText={setSearchTerm}
                onSubmitEditing={onSearch}
            />
            {
                typeof data == 'object' && Object.keys(data).length != 0?
                <WebUrlItem />
                :
                <View style={styles.empty_wrapper}>
                    <Image
                        source={require('../../assets/emptySearch.png')}
                        style={styles.empty_search_image}
                    />
                    <Text>Aucun resultat de recherche disponible</Text>
                </View>
            }
        </View>
    );
};

//make this component available to the app
export default HomeScreen;
