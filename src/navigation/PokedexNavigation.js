import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PokedexScreen from '../screens/Pokedex';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Pokedex Screen" 
                component={PokedexScreen} 
                options={{ title: "", headerShown: false}}
                
            />
        </Stack.Navigator>
    )
}