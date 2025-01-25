import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type(props) {
    const {types} = props;
    
    return (
        <View style={styles.content}>
            {types.map( (item, index) => (
                <View key={index} style={{...styles.pill, backgroundColor:getColorByPokemonType(item.type.name)}}>
                    <Text style={styles.info}>{item.type.name}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    info: {
        textTransform: 'capitalize',
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
    }
});