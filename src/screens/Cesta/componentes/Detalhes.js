import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Botao from '../../../components/Botao';


export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return <>
        <Text style={styles.nome}>{nome}</Text>
        <View style={styles.fazenda}>
            <Image source={logoFazenda} style={styles.imagemFazenda}/>
            <Text style={styles.nomeFazenda}>{nomeFazenda}</Text>
        </View>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>{preco}</Text>

        <Botao texto={botao}/>
    </>
}

const styles = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },

    imagemFazenda: {
        height: 32,
        width: 32
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})