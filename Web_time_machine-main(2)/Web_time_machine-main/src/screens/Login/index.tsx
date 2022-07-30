//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { styles } from './style';

// create a component
const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title_wrapper}>Welcome to Web Time Machine</Text>
            <Input
                iconName='person'
                placeholder='Email'
            />
            <Input
                iconName='key'
                placeholder='Password'
            />
            <Button
                text='Login'
                onPress={() => navigation.navigate('Tabs')}
            />
        </View>
    );
};

//make this component available to the app
export default LoginScreen;
