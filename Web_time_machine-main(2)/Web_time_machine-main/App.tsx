import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rooter from './src/navigations';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Rooter />
      </NavigationContainer>
    </Provider>
  );
}