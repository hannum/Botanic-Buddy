
import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from "react-native"
import * as Colors from '../utils/Colors'

import Card from '../components/Card'
import { windowHeight, windowWidth } from '../utils/Dimension'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CardSocial from '../components/CardSocial'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={{overflow: 'visible'}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.welcomeText}>Howdy,</Text>
                        <Text style={styles.usernameText}>Anna Nelson</Text>
                    </View>
                    <TouchableOpacity style={styles.avatarButton}>
                        <Image style={styles.userAvatar} source={{uri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.pageTitle}>top plants today</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollView} >
                    <TouchableOpacity onPress={() => navigation.navigate('SocialPlantDetail')}>
                        <Card
                            plantImage={{uri: 'https://www.pngkit.com/png/full/288-2886314_monstera-deliciosa-small-swiss-cheese-plant.png'}}
                            plantName='Monstera Deliciousa'
                            avatar={{uri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            username='John Doe'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SocialPlantDetail')}>
                        <Card
                            plantImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                            plantName='Ficus Retusa'
                            avatar={{uri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            username='John Doe'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SocialPlantDetail')}>
                        <Card
                            plantImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                            plantName='Ficus Retusa'
                            avatar={{uri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            username='John Doe'
                        />
                    </TouchableOpacity>


                </ScrollView>
                <Text style={styles.pageTitle}>Explore</Text>
                <CardSocial
                    plantSocialImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                    plantSocialName='Monstera Deliciousa'
                    socialUsername='Joyce Waters'
                    socialUserAvatar={{uri: 'https://images.pexels.com/photos/5351226/pexels-photo-5351226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                />
                <CardSocial
                    plantSocialImage={{uri: 'https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/dreamstimemaximum_70276461_1080x608_v2.jpg?itok=XrMA71Up'}}
                    plantSocialName='Peace Lilies'
                    socialUsername='Joyce Waters'
                    socialUserAvatar={{uri: 'https://images.pexels.com/photos/5351226/pexels-photo-5351226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                />
                <CardSocial
                    plantSocialImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                    plantSocialName='Moon Eascipranth'
                    socialUsername='Joyce Waters'
                    socialUserAvatar={{uri: 'https://images.pexels.com/photos/5351226/pexels-photo-5351226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                />
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: 'blue',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },

    scrollView: {
        alignContent: 'center',
        overflow: "visible",
        marginBottom: 24,
    },
    headerContainer: {
        marginTop: 35,
        flex: 1,
        height: windowHeight/13,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    welcomeText: {
        fontSize: 16,
        fontFamily: 'medium',
        color: Colors.Black,
        opacity: .5,
    },
    usernameText: {
        fontSize: 24,
        fontFamily: 'medium',
        color: Colors.Green,
        marginTop: 5,
    },
    avatarButton: {
        height: 48,
        width: 48,
        borderRadius: 12,
        alignSelf: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 20,
        backgroundColor: '#fcfcfc',
    },
    userAvatar: {
        width: 48,
        height: 48,
        resizeMode: "cover",
        borderRadius: 12,
    },
    pageTitle: {
        textTransform: 'capitalize',
        marginBottom: 20,
        fontSize: 30,
        color: Colors.Black,
        fontFamily: 'semiBold',
        marginTop: 10,
    }

})