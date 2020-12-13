import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimension'
import * as Colors from '../utils/Colors'

const FormButton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight/13,
        backgroundColor: Colors.Green,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
})