import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/Home';
import ProfilScreen from '../screens/Profil';
import { colors } from '../styles';

const Tab = createBottomTabNavigator();

function TabsBar() {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: colors.BLACK
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="Profil" 
            component={ProfilScreen}
            options={{
                tabBarLabel: 'Profil',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
  );
}

export default TabsBar