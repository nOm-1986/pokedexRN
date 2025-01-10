import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteNavigation from '../navigation/FavoriteNavigation';
import PokedexNavigation from '../navigation/PokedexNavigation';
import AccounNavigation from '../navigation/AccountNavigation';

const ButtonTab = createBottomTabNavigator ();

export default function Navigation() {
    return (
    <ButtonTab.Navigator>
        <ButtonTab.Screen 
            name='Favoritos' 
            component={FavoriteNavigation} 
            options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({color, size}) => (
                    <Icon name="heart" size={17} color={color} />
                )
            }}
        />

        <ButtonTab.Screen name='Pokedex' component={PokedexNavigation}
            options={{
                tabBarLabel: '',
                tabBarIcon: () => renderPokeball(),
            }}
        />

        <ButtonTab.Screen 
            name='Mi cuenta' 
            component={AccounNavigation} 
            options={{
                tabBarLabel: 'Cuenta',
                tabBarIcon: ({color, size}) => (
                    <Icon name="gear" size={18} color={color} />
                )
            }}
        />
    </ButtonTab.Navigator>
    )
}

function renderPokeball () {
    return (
        <Image 
            source={require('../assets/pokeball.png')} 
            style={
                {width: 70, height:70, top: -20}
            }
        />
    )
}