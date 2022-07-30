//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text,
    TextInput,
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { styles } from './style';

// create a component
const Input = ({
    placeholder,
    iconName,
    onChangeText,
    style,
    onSubmitEditing
}: InputProps) => {
    return (
        <View style={[styles.container, style]}>
            <Ionicons
                name = {iconName}
                size = {20}
            />
            <TextInput
                placeholder = {placeholder}
                onChangeText = {onChangeText}
                onSubmitEditing = {onSubmitEditing}
                style = {styles.input_wrapper}
            />
        </View>
    );
};

interface InputProps{
    placeholder: string,
    iconName: string,
    onChangeText?: (text: string) => void,
    style?: Object,
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
}

//make this component available to the app
export default Input;
