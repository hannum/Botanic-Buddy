import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import * as Colors from '../utils/Colors'
import AvatarCardShop from '../components/AvatarCardShop'
import ShopTopPickCard from '../components/ShopTopPickCard'
import { windowWidth } from '../utils/Dimension'
import ShopExploreCard from '../components/ShopExploreCard'



export default class ShopScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state ={}
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{overflow: 'visible'}} >
                    <Text style={styles.headerTitle}>Plant Shop</Text>
                    <Text style={styles.smallHeader}>Avatars</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}} >
                        <AvatarCardShop 
                            avatarImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                            avatarName='Onion'
                            avatarPrice='2'
                        />
                        <AvatarCardShop 
                            avatarImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                            avatarName='Onion'
                            avatarPrice='2'
                        />
                        <AvatarCardShop 
                            avatarImage={{uri: 'https://purepng.com/public/uploads/thumbnail/11232131312312-owi.png'}}
                            avatarName='Onion'
                            avatarPrice='2'
                        />
                    </ScrollView > 
                    <Text style={styles.smallHeader}>Top Pick Today</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}  >
                        <ShopTopPickCard
                            plantImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            plantName='Cutleaf Small Flowered Hemp'
                            plantPrice='12'
                        />
                        <ShopTopPickCard
                            plantImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            plantName='Cutleaf Small Flowered Hemp'
                            plantPrice='12'
                        />
                        <ShopTopPickCard
                            plantImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            plantName='Cutleaf Small Flowered Hemp'
                            plantPrice='12'
                        />
                    </ScrollView>
                    <Text style={styles.smallHeader}>Explore</Text>
                    <View style={styles.exploreContainer}>
                        <ShopExploreCard
                            plantImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            plantName='Cutleaf Small Flowered Hemp'
                            plantPrice='12'
                        />
                        <ShopExploreCard
                            plantImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            plantName='Cutleaf Small Flowered Hemp'
                            plantPrice='12'
                        />
                        <ShopExploreCard
                            plantImage={{uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                            plantName='Cutleaf Small Flowered Hemp'
                            plantPrice='12'
                        />

                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 38,
        fontFamily: 'semiBold',
        marginTop: 50,
    },
    smallHeader: {
        color: Colors.Black,
        fontFamily: 'semiBold',
        marginTop: 32,
        marginBottom: 20,
        fontSize: 20,
    }
})