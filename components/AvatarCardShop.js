import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Colors from '../utils/Colors'


const AvatarCardShop = ({avatarImage, avatarName, avatarPrice, ...rest}) => {
    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardWrapper}>
                <Image style={styles.avatarImage}  source={avatarImage} />
                <View style={styles.rightCardContainer} >
                    <Text style={styles.avatarName} >{avatarName}</Text>
                    <View style={styles.priceContainer} >
                        <Text style={{color: Colors.Green, fontSize: 14, fontFamily: 'semiBold'}}>€</Text>
                        <Text style={{color: Colors.Green, fontFamily: 'semiBold', fontSize: 24, marginLeft: 5,}} >{avatarPrice}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default AvatarCardShop

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
    cardWrapper: {
        flexDirection: 'row',
    },
    avatarImage: {
        resizeMode: 'contain',
        height: 80,
        width: 80,
    },
    rightCardContainer: {
        paddingHorizontal: 20,
    },
    avatarName: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        fontSize: 20,
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },

})