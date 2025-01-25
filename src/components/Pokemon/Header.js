import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import getColorByPokemonType from "../../utils/getColorByPokemonType"

export default function Header(props) {
    const {name, order, image, type} = props
    const color = getColorByPokemonType(type)

    const bgStyle = [{ backgroundColor: color, ...styles.bg }]

    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 350,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content: {
        marginTop: 25
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 10,
    },
    nameText: {
        color: 'white',
        fontWeight: 'Bold',
        fontSize: 27,
        textTransform: 'capitalize',
    },
    order: {
        color: "#fff",
        fontWeight: "Bold",
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        top: 10,
    },
    image: {
        width: 250,
        height: 250,
    },
});