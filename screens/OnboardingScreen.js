import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({ navigation }) => {

    const SkipButton = ({...props}) => (
        <TouchableOpacity style={styles.onboardingSkipButton} {...props}>
            <Text style={styles.onboardingTextSkipStyle}>Skip</Text>
        </TouchableOpacity>
    )
    const NextButton = ({...props}) => (
        <TouchableOpacity style={styles.onboardingNextButton} {...props}>
            <Text style={styles.buttonTextStyle}>Next</Text>
        </TouchableOpacity>
    )
    const DoneButton = ({...props}) => (
        <TouchableOpacity style={styles.onboardingNextButton} {...props}>
            <Text style={styles.buttonTextStyle}>Done</Text>
        </TouchableOpacity>
    )
    const Indicators = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
          backgroundColor = selected ? '#329159' : 'rgba(0, 0, 0, 0.3)';
        } else {
          backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }
        return (
          <View
            style={{
              width: 24,
              height: 6,
              borderRadius: 5,
              marginHorizontal: 3,
              backgroundColor,
            }}
          />
        );
      };
    

    return(
        <Onboarding
            DotComponent = {Indicators}
            SkipButtonComponent = {SkipButton}
            NextButtonComponent = {NextButton}
            DoneButtonComponent = {DoneButton}
            onSkip={() => navigation.navigate("Login")}
            onDone={() => navigation.navigate("Login")}
            bottomBarColor = '#fff'
            bottomBarHighlight = {false}
            imageContainerStyles={styles.imageContainerStyles}
            titleStyles={styles.titleStyles}
            pages={[
                {
                backgroundColor: '#fff',
                image: <Image style={styles.onboardingImage} source={require('../assets/images/onboarding01.png')} />,
                title: 'Easy observe\nyour smart garden',
                subtitle: '',
                },
                {
                backgroundColor: '#fff',
                image: <Image style={styles.onboardingImage2} source={require('../assets/images/onboarding02.png')} />,
                title: 'No gardening mistakes\nonly experiments',
                subtitle: '',
                },
                {
                backgroundColor: '#fff',
                image: <Image style={styles.onboardingImage3} source={require('../assets/images/onboarding03.png')} />,
                title: 'Do green things\ntogether today',
                subtitle: '',
                },
                
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    onboardingImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '110%',
    },
    onboardingImage2: {
        resizeMode: 'contain',
        height: '120%',
    },
    onboardingImage3: {
        width: '100%',
        resizeMode: 'contain',
        height: '115%',
    },
    
    imageContainerStyles: {
        height: '55%',
    },
    onboardingSkipButton: {
        marginLeft: 20,
    },
    onboardingTextSkipStyle: {
        color: '#329159',
        fontFamily: 'medium'
    },
    onboardingNextButton: {
        marginRight: 20,
        backgroundColor: '#329159',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 12,
    },
    titleStyles: {
        fontFamily: 'bold',
        lineHeight: 36,
    },
    buttonTextStyle: {
        fontFamily: 'bold',
        color: '#fff',
    }
})