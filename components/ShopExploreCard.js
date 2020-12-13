import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Colors from '../utils/Colors'
import { windowWidth } from '../utils/Dimension'


const ShopExploreCard = ({plantImage, plantName, plantPrice, ...rest}) => {
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

export default ShopExploreCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.03,
        shadowRadius: 3.84,
        elevation: 20,
        marginBottom: 20,
    },
    cardWrapper: {
        width: windowWidth-40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    plantImage: {
        resizeMode: 'cover',
        height: 80,
        width: 100,
        borderRadius: 12,
    },
    cardDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 32,
    },
    plantName: {
        width: '55%',
        fontFamily: 'semiBold',
        color: Colors.Black,
        fontSize: 16,
        lineHeight: 22,
        
    }

})