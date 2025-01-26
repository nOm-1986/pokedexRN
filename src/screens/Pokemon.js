import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react'
import { getPokemonDetailsApi} from '../api/pokemon'
import Header from '../components/Pokemon/Header';
import Types from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats'

export default function Pokemon(props) {
  const {route: { params }, navigation } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon name="arrow-left" color="#fff" size={18} style={{ marginLeft: 20 }} onPress={navigation.goBack}/> 
    })
  }, [navigation, params])
  
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response)
      } catch (error) {
        navigation.goBack(); //Devuelve a la screeen de donde viene
      }
    })()
  }, [params])

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header 
        name={pokemon.name} 
        order={pokemon.order} 
        image={pokemon.sprites.other['home'].front_default}
        type={pokemon.types[0].type.name}
      />
      <Types types={pokemon.types}/>
      <Stats stats={pokemon.stats}></Stats>
    </ScrollView>
  )
}