import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import {getPokemonsApi, getPokemonDetailsByUrlApi} from "../api/pokemon";
import PokemonList from '../components/PokemonList';
export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);

      const pokemonsArray = [];
      for await (const pokemonItem of response.results) {
        //console.log(pokemonItem)
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemonItem.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['home'].front_default,
        })
      }
      setPokemons([...pokemons, ...pokemonsArray])
      setNextUrl(response.next);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});