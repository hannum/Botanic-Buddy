import React, { useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppNavigator from './navigation/TabNavigator';
import AuthStack from './navigation/AuthStack';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.firebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }
  render() {
    if ( (!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        (this.state.isAuthenticated) ? <AppNavigator/> : <AuthStack/>
      )
    }
  }
  _loadResourcesAsync = async () => {
    return Promise.all ([
      Font.loadAsync({
        'bold' : require('./assets/fonts/futur-bold.ttf'),
        'book' : require('./assets/fonts/futur-book.ttf'),
        'semiBold' : require('./assets/fonts/futur-demi.ttf'),
        'medium' : require('./assets/fonts/futur-medium.ttf'),
      })
        
    ])
  }
  _handleLoadingError = error => {
    console.warn(error)
  }
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      backgroundColor: '#fff',
  },
})