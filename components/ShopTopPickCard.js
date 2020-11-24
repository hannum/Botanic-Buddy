import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Colors from '../utils/Colors'
import { windowWidth } from '../utils/Dimension'


const ShopTopPickCard = ({plantImage, plantName, plantPrice, ...rest}) => {
    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.cardWrapper}>
                <Image style={styles.plantImage}  source={plantImage} />
                <View style={styles.cardDetail} >
                    <Text style={styles.plantName} >{plantName}</Text>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Text style={{fontSize: 16, fontFamily: 'semiBold', color: Colors.Green}} >€</Text>
                        <Text style={{fontSize: 32, fontFamily: 'semiBold', color: Colors.Green, marginLeft: 5}} >{plantPrice}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ShopTopPickCard

const styles = StyleSheet.create({
    cardContainer: {
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
        width: windowWidth/1.75
    },
    plantImage: {
        resizeMode: 'cover',
        height: 180,
        width: windowWidth/1.75,
        borderRadius: 20,
        marginBottom: 15,
    },
    cardDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    plantName: {
        width: '55%',
        fontFamily: 'semiBold',
        color: Colors.Black,
        fontSize: 14,
        lineHeight: 22,
    }

})