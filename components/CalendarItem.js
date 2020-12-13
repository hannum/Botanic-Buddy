import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Colors from '../utils/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign';


const CalendarItem = ({eventTitle, eventTimeStamp, eventDetails, ...rest}) => {
    return(
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.timeStampContainer}>
                <AntDesign
                    name='clockcircleo'
                    size={16}
                    color={Colors.HalfBlack}
                />
                <Text style={styles.timeStamp}>{eventTimeStamp}</Text>
            </View>
            <Text style={styles.eventTitle}>{eventTitle}</Text>
            <Text style={styles.eventDetails}>{eventDetails}</Text>

        </TouchableOpacity>
    )
}

export default CalendarItem;

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 8,
        paddingHorizontal: 20,
        justifyContent: "center",
        marginTop: 12,
        marginRight: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
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
    timeStampContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems:'center',
    },
    timeStamp: {
        color: Colors.Black,
        opacity: .5,
        marginLeft: 6,
        fontFamily: 'book',
        fontSize: 12,
    },
    eventTitle: {
        fontFamily: 'semiBold',
        fontSize: 14,
        color: Colors.Green,
    },
    eventDetails: {
        fontFamily: 'book',
        fontSize: 14,
        color: Colors.Black,
        marginTop: 5,
        lineHeight: 22,
    }
})