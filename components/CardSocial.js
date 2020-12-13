import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image, ColorPropType } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Rating, AirbnbRating } from 'react-native-ratings'
import * as Colors from '../utils/Colors'
import { windowHeight, windowWidth } from '../utils/Dimension'

const RATING_IMAGE = require('../assets/images/water.png')


const CardSocial = ({socialUserAvatar, plantSocialName, socialUsername, rating, plantSocialImage, ...rest}) => {
    return(
        <TouchableOpacity  style={styles.cardContainer}>
            <Image style={styles.plantImage} source={plantSocialImage}/>

            <View style={styles.bottomCardContainer}>
                <View style={styles.topBottomCardContainer}>
                    <View style={{flex: 1, marginLeft: 15, flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={styles.avatar} source={socialUserAvatar}/>
                        <Text style={styles.usernameText} >{socialUsername}</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.numberOfRate}>(335 Rates)</Text>
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
                    </View>
                </View>
                <View style={styles.plantNameTextContainer}>
                    <Text style={styles.plantNameText} >{plantSocialName}</Text>

                </View>                    
            </View>
            
        </TouchableOpacity>
    )
}

export default CardSocial

const styles = StyleSheet.create({
    cardContainer: {
        height: windowHeight/3.3,
        width: windowWidth-40,
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 20,
        backgroundColor: '#fff',
        marginBottom: 25,
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 6,
        resizeMode: 'cover',
        
    },
    plantImage: {
        flex: 1.5,
        resizeMode: 'cover',
        width: '100%',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    bottomCardContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topBottomCardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingContainer: {
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    plantNameTextContainer: {
        flex: 1,
    },
    plantNameText: {
        paddingLeft: 15,
        fontSize: 20,
        color: Colors.Black,
        fontFamily: 'semiBold',
    },
    usernameText: {
        color: Colors.Green,
        fontSize: 14,
        fontFamily: 'medium',
        marginLeft: 10,
    },
    numberOfRate: {
        fontSize: 10,
        color: Colors.Green,
        marginRight: 5,
    },
})