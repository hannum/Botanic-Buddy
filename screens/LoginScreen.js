import React, { Component, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import SocialButton from '../components/SocialButton'
import * as Colors from '../utils/Colors';

import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {

        }, (error) => {
            Alert.alert(error.message)
        })

    }
    render() {
        return (
            <View style={styles.container}>
            <Image
                source = {require('../assets/images/onboarding01.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Botanic Buddy</Text>

            <FormInput
                value={this.state.email}
                placeholderText="Email"
                iconType="user"
                onChangeText={(text) => { this.setState({email: text}) }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                value={this.state.password}
                placeholderText="Password"
                iconType="lock"
                onChangeText={(text) => { this.setState({password: text}) }}
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
            />
            <FormButton
                buttonTitle="Sign In"
                onPress={this.onLoginPress}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color={Colors.Green}
                backgroundColor="#f2f2f2"
                onPress={() => {}}
            />
            <TouchableOpacity style={styles.createNewAccountButton} onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        marginBottom: 30,
    },
    text: {
        fontSize: 28,
        marginBottom: 30,
        color: Colors.Green,
        fontFamily: 'bold'
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 20,
    },
    navButtonText: {
        fontSize: 14,
        fontFamily: 'semiBold',
        color: Colors.Green,
    },
    createNewAccountButton: {
        marginTop: 30,
    }
})