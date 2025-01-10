import React from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator, Platform  } from 'react-native'
import Pokemon from "./PokemonCard"

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props;

    const loadMore = () => {
        loadPokemons();
    }
    
    return (
        <FlatList 
            data={pokemons}
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false} //Ocultar la barra de scroll vertical
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <Pokemon pokemon={item}  /> }
            contentContainerStyle={styles.flatListContentContainer}
            columnWrapperStyle={styles.row} // (Opcional) Estilo para las filas
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator 
                        size="large"
                        style={ styles.spinner}
                        color="#AEAEAE"
                    />
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
    },
    row: {
        justifyContent: 'space-around', // Distribuye el espacio entre columnas
    }, 
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 60,
    }
})