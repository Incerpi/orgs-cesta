import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Botao({texto, style, onPress}){
    return <>
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },

    textoBotao:{
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})