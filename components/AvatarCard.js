import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'

const AvatarCard = ({plantImage, ...rest}) => {
    return(
        <TouchableOpacity style={styles.cardContainer}>
            <Image style={styles.plantImage}  source={plantImage} />
        </TouchableOpacity>
    )
}

export default AvatarCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 20,
        padding: 10,
    },
    plantImage: {
        resizeMode: 'contain',
        height: 100,
        width: 150,
    }

})