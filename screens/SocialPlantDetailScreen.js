import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather';
import * as Colors from '../utils/Colors'
import { windowHeight, windowWidth } from '../utils/Dimension';
import { Rating, AirbnbRating } from 'react-native-ratings'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const RATING_IMAGE = require('../assets/images/water.png')


const SocialPlantDetailScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{marginTop: 50,}} onPress={() => navigation.goBack()}>
                    <View style={styles.backButtonContainer}>
                        <Feather name='arrow-left' size={32} color={Colors.Green}/>
                        <Text style={{color: Colors.Green, fontFamily: 'semiBold', fontSize: 16, marginLeft: 8}}>Home</Text>
                    </View>
                </TouchableOpacity>
                <Image style={styles.plantImage} source={{uri: 'https://images.pexels.com/photos/3844139/pexels-photo-3844139.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}}/>
                <View style={styles.userDetailContainer}>
                    <Image style={styles.userAvatar} source={{uri: 'https://images.pexels.com/photos/3844139/pexels-photo-3844139.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}}/>
                    <Text style={styles.username}>Joyce Waters</Text>
                </View>
                <View style={styles.plantDetailsContainer}>
                    <Text style={styles.plantName}>Moon Eascipranth</Text>
                    <View style={styles.ratingContainer}>
                        <Rating
                            type='custom'
                            ratingImage={RATING_IMAGE}
                            ratingCount={5}
                            imageSize={20}
                            showRating={false}
                            startingValue={4}
                            minValue={1}
                            ratingColor={Colors.Blue}
                            ratingBackgroundColor={Colors.LightGray}
                        />
                        <Text style={styles.numberOfRate}>(335 Rates)</Text>
                    </View>
                    <Text style={styles.smallHeader}>Description</Text>
                    <Text style={styles.description}>Moon Eascipranth is an extremely rare, small plant and can be found mostly in savannas. It blooms in late spring.
                    It has huge, heart shaped leaves, which are usually pine green. It also grows quite large flowers, which can be black, light purple, dark brown and blue.
                    </Text>
                    <View style={styles.indexContainer}>
                        <View style={styles.plantScoreContainer}>
                            <Text style={styles.smallTitle}>Plant Score</Text>
                            <View style={styles.percentageContainer}>
                                <Text style={{fontFamily: 'bold', color: Colors.Green, fontSize: 14}}>100%</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.timelapseContainer}>
                                <Text style={styles.smallTitle}>Timelapse</Text>  
                                <View style={styles.percentageContainer}>
                                    <FontAwesome5 name='play' size={20} style={{paddingLeft: 5}} color={Colors.Green}/>
                                </View>                      
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.smallHeader}>Rate This Plant</Text>
                    <View style={styles.ratingActionContainer}>
                        <Rating
                            type='custom'
                            ratingImage={RATING_IMAGE}
                            ratingCount={5}
                            imageSize={40}
                            showRating={false}
                            startingValue={4}
                            minValue={1}
                            ratingColor={Colors.Blue}
                            ratingBackgroundColor={Colors.LightGray}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
        
    )
}

export default SocialPlantDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fcfcfc',
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    plantImage: {
        width: windowWidth-40,
        alignItems: 'center',
        height: windowHeight/3,
        borderRadius: 24,
        resizeMode: 'cover',
        marginTop: 20,
    },
    userDetailContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 12,
        marginRight: 15,
        resizeMode: 'cover',
    },
    username: {
        fontFamily: 'semiBold',
        color: Colors.Green,
        fontSize: 16,
    },
    plantDetailsContainer: {
        marginTop: 12,
    },
    plantName: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        fontSize: 28,
    },
    ratingContainer: {
        marginTop: 15,
        flexDirection: 'row',
    },
    numberOfRate: {
        marginLeft: 12,
        color: Colors.HalfBlack,
        fontFamily: 'book',
    },
    smallHeader: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        marginTop: 24,
        marginBottom: 10,
        fontSize: 18,
    },
    description: {
        fontSize: 14,
        fontFamily: 'book',
        color: Colors.Black,
        lineHeight: 20,
    },
    indexContainer: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    plantScoreContainer: {
        flex: .48,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    smallTitle: {
        color: Colors.Black,
        fontSize: 16,
        fontFamily: 'semiBold',
    },
    percentageContainer: {
        borderRadius: 100,
        width: 70,
        height: 70,
        borderWidth: 4,
        borderColor: Colors.Green,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    timelapseContainer: {
        flex: .48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingActionContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 80,
    }

})