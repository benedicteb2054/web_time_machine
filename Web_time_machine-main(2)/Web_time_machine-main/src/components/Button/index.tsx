//import liraries
import React, { Component } from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './style';

// create a component
const Button = ({
    text,
    onPress
}: ButtonProps) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress = {onPress}
        >
            <Text style = {styles.text_btn}>{text}</Text>
        </TouchableOpacity>
    );
};

interface ButtonProps{
    text: string,
    onPress?: (event: GestureResponderEvent) => void
}

//make this component available to the app
export default Button;
