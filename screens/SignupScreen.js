import React, { Component, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput, Button, Alert } from 'react-native';
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import SocialButton from '../components/SocialButton'
import * as Colors from '../utils/Colors';
import * as firebase from 'firebase'



export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            isAuthenticated: false,
        }
    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    
    render() {
        return(
            <View style={styles.container}>
            <Text style={styles.text}>Sign In</Text>
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
            <FormInput
            value={this.state.passwordConfirm}
            placeholderText="Confirm Password"
            iconType="key"
            onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            />
            <FormButton
                buttonTitle="Sign Up"
                onPress={this.onSignupPress}
            />
            <SocialButton
                buttonTitle="Sign Up with Google"
                btnType="google"
                color={Colors.Green}
                backgroundColor="#f2f2f2"
                onPress={() => {}}
            />
            <TouchableOpacity style={styles.createNewAccountButton} onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={styles.navButtonText}>Already have an account</Text>
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
        marginVertical: 15,
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