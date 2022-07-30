//import liraries
import React, { Component } from 'react';
import { 
    TouchableOpacity, 
    Text,
    Linking
} from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { webUrlSelector } from '../../features/wayback/webUrlSlice';
import { styles } from './style';

// create a component
const WebUrlItem = () => {

    const { data } = useSelector(webUrlSelector)

    const openUrl = () => {
        Linking.openURL(data?.archived_snapshots?.closest?.url)
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={openUrl}
        >
            <Text style={styles.url_wrapper}>{data?.url}</Text>
            <Ionicons
                name='chevron-forward'
                size={20}
            />
        </TouchableOpacity>
    );
};

//make this component available to the app
export default WebUrlItem;
