import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { windowHeight, windowWidth } from '../utils/Dimension'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import * as Colors from '../utils/Colors'



const MyPlantCard = ({plantImage, plantName, timeStamp, ...rest}) => {
    return(
        <View style={styles.cardWrapper} >
            <View style={styles.topCardContainer} >
                <View style={styles.imageWrapper} >
                    <Image style={styles.plantImage} source={plantImage} />
                </View>
                <View style={styles.midTopCardContainer} >
                    <Text style={styles.plantName}>{plantName}</Text>
                    <Text style={styles.timeStamp}>{timeStamp} </Text>
                </View>
            </View>
            <View style={styles.bottomCardContainer}>
                <View style={styles.waterContainer} >
                    <View style={styles.leftRowContainer} >
                        <View style={styles.iconWrapper} >
                            <Entypo name='water' size={20} color='#fff'  />
                        </View>
                        <Text style={styles.rowText}>Water Tank</Text>
                    </View>
                    <View style={styles.iconWrapperGoodCond}>
                        <Feather name='check' size={24} color='#fff' />
                    </View>
                </View>
                <View style={styles.tempContainer} >
                    <View style={styles.leftRowContainer} >
                        <View style={styles.iconWrapperTemp} >
                            <FontAwesome5 name='temperature-low' size={20} color='#fff'  />
                        </View>
                        <Text style={styles.rowText}>Temperature</Text>
                    </View>
                    <View style={styles.iconWrapperWarning}>
                        <FontAwesome5 name='exclamation' size={16} color='#fff' />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default MyPlantCard

const styles = StyleSheet.create({
    topCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: '#EAF4EE',
        paddingTop: 20,
    },
    imageWrapper: {
        backgroundColor: Colors.Green,
        height: 80,
        width: 80,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    plantImage: {
        resizeMode: 'contain',
        height: 70,
        width: 70,
    },
    midTopCardContainer: {
        marginLeft: 15,

    },
    plantName: {
        fontFamily: 'medium',
        color: Colors.Black,
        fontSize: 18,
        marginBottom: 6,
    },
    timeStamp: {
        fontFamily: 'book',
        color: Colors.HalfBlack,
        fontSize: 14,
    },
    waterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 5,
        alignItems: 'center',

    },
    iconWrapper: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Blue,
        borderRadius: 10,
    },
    leftRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowText: {
        fontSize: 14,
        fontFamily: 'medium',
        marginLeft: 15,
    },
    tempContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 0,
        alignItems: 'center',
    },
    iconWrapperTemp: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Orange,
        borderRadius: 10,
    },
    iconWrapperGoodCond: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Green,
        borderRadius: 8,
    },
    iconWrapperWarning: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Orange,
        borderRadius: 8,
    }
    

})