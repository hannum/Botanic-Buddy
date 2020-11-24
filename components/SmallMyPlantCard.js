import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { windowHeight, windowWidth } from '../utils/Dimension'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import * as Colors from '../utils/Colors'



const SmallMyPlantCard = ({plantImage, plantName, timeStamp, waterPercentage, tempIndex, ...rest}) => {
    return(
        <View style={styles.cardWrapper} >
            <View style={styles.topCardContainer} >
                <View style={styles.leftTopCardContainer} >
                    <Text style={styles.plantName}>{plantName}</Text>
                    <Text style={styles.timeStamp}>{timeStamp} </Text>
                </View>
                <View style={styles.imageWrapper} >
                    <Image style={styles.plantImage} source={plantImage} />
                </View>
            </View>
            <View style={styles.bottomCardContainer}>
                <View style={styles.waterContainer} >
                        <View style={styles.iconWrapper} >
                            <Entypo name='water' size={20} color={Colors.Blue}  />
                        </View>
                        <Text style={styles.waterPercentage}>{waterPercentage}</Text>
                        <Text style={styles.symbol}>%</Text>
                </View>
                <View style={styles.tempContainer} >
                        <View style={styles.iconWrapperTemp} >
                            <FontAwesome5 name='temperature-low' size={20} color={Colors.Orange}  />
                        </View>
                        <Text style={styles.tempIndex}>{tempIndex}</Text>
                        <Text style={styles.symbol}>°C</Text>
                </View>

            </View>
        </View>
    )
}

export default SmallMyPlantCard

const styles = StyleSheet.create({
    cardWrapper: {
        width: windowWidth/1.6,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.03,
        shadowRadius: 3.84,
        elevation: 20,
        marginBottom: 80,
        borderRadius: 24,
        marginRight: 20,
    },
    topCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#f4f4f4',
    },
    plantImage: {
        height: 60,
        width: 80,
        resizeMode: 'cover',
    },
    plantName: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        marginBottom: 10,
        fontSize: 18,
        paddingLeft: 20,
    },
    timeStamp: {
        paddingLeft: 20,
        color: Colors.HalfBlack,
        fontSize: 12,
        fontFamily: 'book',
    },
    bottomCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    waterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
    },
    tempContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    waterPercentage: {
        fontFamily: 'semiBold',
        fontSize: 24,
        color: Colors.Black,
        marginLeft: 10,
        marginRight: 4,
    },
    tempIndex: {
        marginLeft: 10,
        marginRight: 4,
        fontFamily: 'semiBold',
        color: Colors.Black,
        fontSize: 28,
    },
    symbol: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        
    }

})