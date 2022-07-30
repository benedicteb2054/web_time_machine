// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import TabsBar from './TabsBar';

const Stack = createNativeStackNavigator();

function Rooter() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
        />
        <Stack.Screen 
            name="Tabs" 
            component={TabsBar}
            options={{
                headerShown: false
            }}
        />
      </Stack.Navigator>
  );
}

export default Rooter;