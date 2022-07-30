//import liraries
import React, { Component } from 'react';
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import Input from '../Input';

import { styles } from './style';

// create a component
const SearchBar = ({
    onChangeText,
    onSubmitEditing
}: SearchBarProps) => {
    return (
        <Input
            placeholder='Search url'
            iconName='search'
            style={styles.input_wrapper}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    );
};

interface SearchBarProps{
    onChangeText?: (text: string) => void,
    onSubmitEditing: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
}

//make this component available to the app
export default SearchBar;
