import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard(props) {
    const {pokemon} = props;

    const pokemonColor = getColorByPokemonType(pokemon.type);

    const bgStyles = {backgroundColor: `${pokemonColor}`, ...styles.bgStyles}

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`)
    }

    return (
        <Pressable onPressOut={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Image src={ pokemon.image} style={styles.image} />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 120,
        width: 165,
        margin: 4
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
        textTransform: "capitalize",
    },
    number:{
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 12,
    },
    image: {
        position:"absolute",
        bottom: 20,
        right: 2, 
        width: 90,
        height: 90,
    },
})