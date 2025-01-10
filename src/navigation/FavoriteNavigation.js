import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritoScreen from "../screens/Favorite";
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
    return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="En un pokemos" component={PokemonScreen} />
        <Stack.Screen name="Favorite" component={FavoritoScreen} />
    </Stack.Navigator>
    )
}