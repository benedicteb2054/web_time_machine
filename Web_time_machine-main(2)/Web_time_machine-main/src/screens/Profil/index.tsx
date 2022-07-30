//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text
} from 'react-native';

import { styles } from './style';

// create a component
const ProfilScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ProfilScreen</Text>
        </View>
    );
};

//make this component available to the app
export default ProfilScreen;
