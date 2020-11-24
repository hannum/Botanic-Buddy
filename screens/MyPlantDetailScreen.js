import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import * as firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Colors from '../utils/Colors'
import { windowWidth } from '../utils/Dimension';
import SmallMyPlantCard from '../components/SmallMyPlantCard';

const MyPlantDetailScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{marginTop: 50,}} onPress={() => navigation.goBack()}>
                    <View style={styles.backButtonContainer}>
                        <Feather name='arrow-left' size={32} color={Colors.Green}/>
                        <Text style={{color: Colors.Green, fontFamily: 'semiBold', fontSize: 16, marginLeft: 8}}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.headerContainer}>
                    <View style={styles.leftHeaderContainer}>
                        <Text style={styles.plantName}>Sansevieria Moonshine</Text>
                        <Text style={styles.timeStamp}>Last checked: 15 hrs ago</Text>
                        <TouchableOpacity style={styles.checkDiaryButton} onPress={() => navigation.navigate('Diary')}>
                            <View style={styles.checkDiaryButtonContainer}>
                                <Text style={{color: '#fff', fontFamily: 'semiBold', fontSize: 16, marginRight: 8}}>Check Diary</Text>
                                <FontAwesome name='pencil' size={24} color='#fff'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.plantImage} source={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}/>
                </View>
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
                <View style={styles.plantDetailsContainer}>

                    <View style={styles.aBoxDetailContainer}>
                        <View style={styles.topBox}>
                            <View style={styles.boxIndex}>
                                <Text style={styles.boxIndexNumber}>80</Text>
                                <Text style={styles.boxIndexSymbol}>%</Text>
                            </View>
                            <View style={styles.statusIndicator}>
                                <Feather name='check' size={14} color='#fff'/>
                            </View>
                        </View>
                        <View style={styles.bottomBox}>
                            <Text style={styles.boxTitle}>Water Tank</Text>
                            <Entypo name='water' size={20} color={Colors.Green}/>
                        </View>
                    </View>
                    <View style={styles.aBoxDetailContainer}>
                        <View style={styles.topBox}>
                            <View style={styles.boxIndex}>
                                <Text style={styles.boxIndexNumber}>24</Text>
                                <Text style={styles.boxIndexSymbol}>°C</Text>
                            </View>
                            <View style={styles.statusIndicator}>
                                <Feather name='check' size={14} color='#fff'/>
                            </View>
                        </View>
                        <View style={styles.bottomBox}>
                            <Text style={styles.boxTitle}>Temperature</Text>
                            <FontAwesome5 name='temperature-low' size={20} color={Colors.Green}/>
                        </View>
                    </View>

                </View>
                <View style={styles.plantDetailsContainer}>

                    <View style={styles.aBoxDetailContainer}>
                        <View style={styles.topBox}>
                            <View style={styles.boxIndex}>
                                <Text style={styles.boxIndexNumber}>18</Text>
                                <Text style={styles.boxIndexSymbol}>%</Text>
                            </View>
                            <View style={styles.statusIndicator}>
                                <Feather name='check' size={14} color='#fff'/>
                            </View>
                        </View>
                        <View style={styles.bottomBox}>
                            <Text style={styles.boxTitle}>Humidity</Text>
                            <Feather name='wind' size={20} color={Colors.Green}/>
                        </View>
                    </View>
                    <View style={styles.aBoxDetailContainer}>
                        <View style={styles.topBox}>
                            <View style={styles.boxIndex}>
                                <Text style={styles.boxIndexNumber}>24</Text>
                                <Text style={styles.boxIndexSymbol}>°C</Text>
                            </View>
                            <View style={styles.statusIndicator}>
                                <Feather name='check' size={14} color='#fff'/>
                            </View>
                        </View>
                        <View style={styles.bottomBox}>
                            <Text style={styles.boxTitle}>Light</Text>
                            <FontAwesome5 name='lightbulb' size={20} color={Colors.Green}/>
                        </View>
                    </View>

                </View>
                <Text style={styles.smallHeader} >My Other Plants</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <SmallMyPlantCard
                        plantImage={{uri:'https://www.pngkit.com/png/full/288-2886314_monstera-deliciosa-small-swiss-cheese-plant.png'}}
                        plantName='Monstera'
                        timeStamp='20/09/2020'
                        waterPercentage='75'
                        tempIndex='24'
                    />
                    <SmallMyPlantCard
                        plantImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                        plantName='Monstera'
                        timeStamp='20/09/2020'
                        waterPercentage='75'
                        tempIndex='24'
                    />
                    <SmallMyPlantCard
                        plantImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                        plantName='Monstera'
                        timeStamp='20/09/2020'
                        waterPercentage='75'
                        tempIndex='24'
                    />
                </ScrollView>
            </ScrollView>


        </View>
    )
}

export default MyPlantDetailScreen

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
    checkDiaryButton: {
        backgroundColor: Colors.Green,
        borderRadius: 12,
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkDiaryButtonContainer: {
        flexDirection: 'row',
    },
    plantImage: {
        width: (windowWidth-50)/2,
        height: '100%',
        resizeMode: 'contain'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 24,
    },
    plantName: {
        fontFamily: 'bold',
        color: Colors.Black,
        lineHeight: 28,
        fontSize: 20,
        width: (windowWidth-50)/2,
        marginBottom: 5,
    },
    timeStamp: {
        color: Colors.HalfBlack,
        fontFamily: 'book',
        marginBottom: 20
    },
    indexContainer: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
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
    plantDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    aBoxDetailContainer: {
        flex: .47,
        backgroundColor: '#f4f4f4',
        borderRadius: 12,
        padding: 20,
    },
    topBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxIndex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxIndexNumber: {
        color: Colors.Black,
        fontSize: 36,
        fontFamily: 'semiBold',
        marginRight: 5,
    },
    statusIndicator: {
        backgroundColor: Colors.Green,
        width: 25,
        height: 25,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBox: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxTitle: {
        fontFamily: 'book',
        color: Colors.Black,
        fontSize: 16,
        marginRight: 12,
    },
    boxIndexSymbol: {
        fontFamily: 'semiBold',
        color: Colors.Black,
        fontSize: 14,
    },
    smallHeader: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        marginTop: 32,
        marginBottom: 20,
        fontSize: 20,
    }

})