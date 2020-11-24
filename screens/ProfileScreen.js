import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Image, ColorPropType } from "react-native"
import * as firebase from 'firebase'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { windowHeight, windowWidth } from '../utils/Dimension'


import * as Colors from '../utils/Colors'
import AvatarCard from '../components/AvatarCard'
import MyPlantCard from '../components/MyPlantCard'



export default function ProfileScreen({ navigation }) {

    const onSignOutPress = () => {
        firebase.auth().signOut()
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{overflow: 'visible'}}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <TouchableOpacity onPress={onSignOutPress}>
                        <Feather name='log-out' color={Colors.Green} size={32} />
                    </TouchableOpacity>
                </View>
                <Image style={styles.userAvatar} source={{uri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}/>
                <Text style={styles.username} >Anna Nelson</Text>
                <View style={styles.indexesWrapper} >
                    <View style={styles.indexContainer} >
                        <Text style={styles.indexText} >32</Text>
                        <View style={styles.indexWrapper}>
                            <MaterialCommunityIcons name='tree' size={24} color={Colors.Green} />
                            <Text style={{fontFamily: 'book', color: Colors.Green, marginLeft: 6}}>Plants</Text>
                        </View>
                    </View>
                    <View style={styles.indexContainer} >
                        <Text style={styles.indexText} >736</Text>
                        <View style={styles.indexWrapper}>
                            <MaterialCommunityIcons name='thumb-up' size={24} color={Colors.Blue} />
                            <Text style={{fontFamily: 'book', color: Colors.Green, marginLeft: 6}}>Likes</Text>
                        </View>
                    </View>
                    <View style={styles.indexContainer} >
                        <Text style={styles.indexText} >03</Text>
                        <View style={styles.indexWrapper}>
                            <MaterialCommunityIcons name='image' size={24} color={Colors.Green} />
                            <Text style={{fontFamily: 'book', color: Colors.Orange, marginLeft: 6}}>Avatar</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.smallHeader} >My Avatar</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
                    <AvatarCard plantImage={require('../assets/images/onion.png')}/>
                    <AvatarCard plantImage={require('../assets/images/lettuce.png')}/>
                    <AvatarCard plantImage={require('../assets/images/chilli.png')}/>
                </ScrollView>
                <Text style={styles.smallHeader} >My Plants</Text>
                <View style={styles.myPlantContainer}>
                    <TouchableOpacity style={styles.myPlantCardContainer} onPress={() => navigation.navigate('PlantDetail')}>
                        <MyPlantCard
                            plantName='Monstera'
                            plantImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                            timeStamp='Last checked: 20/09/2020'
                        />
                    </TouchableOpacity>
                </View>
        
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fcfcfc',
    },
    myPlantCardContainer: {
        width: windowWidth-40,
        height: windowHeight/3.35,
        backgroundColor: '#fff',
        borderRadius: 24,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 20,
        marginBottom: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        fontSize: 38,
    },
    userAvatar: {
        width: 220,
        height: 220,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
    },
    username: {
        fontSize: 28,
        color: Colors.Black,
        textAlign: 'center',
        fontFamily: 'semiBold',
        marginTop: 12,
    },
    indexContainer: {
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        flex: 1/3.2,
        borderRadius: 16,
        paddingVertical: 15,
    },
    indexesWrapper: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    indexWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    indexText: {
        fontFamily: 'semiBold',
        color: Colors.Black,
        fontSize: 28,
    },
    smallHeader: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        marginTop: 32,
        marginBottom: 20,
        fontSize: 20,
    }
})