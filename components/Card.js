import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Rating, AirbnbRating } from 'react-native-ratings'
import * as Colors from '../utils/Colors'
import { windowHeight, windowWidth } from '../utils/Dimension'

const RATING_IMAGE = require('../assets/images/water.png')

const Card = ({avatar, plantName, username, rating, plantImage, ...rest}) => {
    return(
        <View style={styles.cardContainer}>
            <View style={styles.topCardContainer}>
                <View style={styles.leftTopContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Image style={styles.avatar} source={avatar}/>
                        <Text style={styles.usernameText} >{username}</Text>
                    </View>
                    <Text style={styles.plantNameText} >{plantName}</Text>
                </View>
                <Image style={styles.plantImage} source={plantImage}/>
            </View>
            <View style={styles.ratingContainer}>
                <Rating
                    type='custom'
                    ratingImage={RATING_IMAGE}
                    ratingCount={5}
                    imageSize={20}
                    showRating={false}
                    startingValue={4}
                    minValue={1}
                    ratingColor={Colors.Blue}
                    ratingBackgroundColor={Colors.LightGray}
                />
                <Text style={styles.numberOfRate}>(335 Rates)</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        width: windowWidth/1.5,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 20,
        marginRight: 25,
    },
    topCardContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EAF4EE',
        alignItems: 'center',
    },
    leftTopContainer: {
        flex: .65,
        flexDirection: 'column'
    },
    avatar: {
        width: 25,
        borderRadius: 6,
        resizeMode: 'cover',
        height: 25,
        marginRight: 10,
        marginLeft: 20,
    },
    plantImage: {
        flex: .35,
        height: 100,
        resizeMode: 'cover',
        borderTopRightRadius: 12,
    },
    ratingContainer: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginLeft: 20,
        flex: 1/2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
    },
    usernameText: {
        fontFamily: 'semiBold',
        color: Colors.Black,
        fontSize: 12,
        color: Colors.Green,
    },
    plantNameText: {
        marginLeft: 20,
        fontFamily: 'semiBold',
        fontSize: 16,
    },
    numberOfRate: {
        fontSize: 10,
        fontFamily: 'medium',
        color: Colors.Black,
        marginLeft: 12,
    }
})