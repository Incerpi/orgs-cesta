import React from 'react';
import {Image, Text, StyleSheet, Dimensions} from 'react-native';

import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Topo({titulo}){

    return <>
        <Image source={topo} style={styles.topo}/>
        <Text style={styles.titulo}>{titulo}</Text>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },

    titulo: {
        width: "100%",
        color: "white",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16
    }
})