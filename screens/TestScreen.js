import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Button, Modal, TextInput } from "react-native"
import firestore from '@react-native-firebase/firestore'

// const noteDocument = await firestore().collection('notes').doc('note').get()




class testScreen extends Component {
    state = {
        note: {
            title: '',
            description: '',
            date: '',
            time: '',
        }
    }

    constructor(props) {
        super(props)
        this.getNote()
        this.subscriber = firestore().collection('notes').doc('note').onSnapshot(doc => {
            this.setState({
                note: {
                    title: doc.data().title,
                    description: doc.data().description,
                    date: doc.data().date,
                    time: doc.data().time,
                }
            })
            console.log(this.state.note)
        })
    }
    getNote = async () => {
        const noteDocument = await firestore().collection('notes').doc('note').get()
        console.log(noteDocument)
    }

    render() {
        return (
            <View>
                
            </View>
        )
    }
}

export default testScreen