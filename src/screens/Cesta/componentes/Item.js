import React from "react";
import {Text, StyleSheet, View, Image, FlatList}  from 'react-native';

export default function Item({item: {nome, imagem}}){

    return <View style={styles.item}>
        <Image source={imagem} style={styles.imagem}/>
        <Text style={styles.nome}>{nome}</Text>
    </View>

}

const styles = StyleSheet.create({

    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,

    },

    item:{
        flexDirection: "row",
        borderBottomWidth: 1, 
        borderBottomColor: "#ECECEC",
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16,
    },

    imagem:{
        width: 46,
        height: 46,

    },

    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
})