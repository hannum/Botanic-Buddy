import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Button, Modal, TextInput } from "react-native"
import * as Colors from '../utils/Colors'
import { Agenda } from 'react-native-calendars'
import CalendarItem from '../components/CalendarItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { windowWidth } from '../utils/Dimension';
import DateTimePicker from '@react-native-community/datetimepicker';


const DiaryScreen = () => {
    const [items, setItems] = useState({
        '2020-11-17': [
            {
            "timestamp": "9:40 AM",
            "name": "Watering the plant",
            "description": "Close relative of bridal veil, the crochet-and-minim buds unfurl into showers of long-stemmed white butterfly flowers right through warm months."
            },
            {
            "timestamp": "8:42 AM",
            "name": "Checked the temperature"
            },

        ],
        '2020-11-18': [{
            "timestamp": "12:23 PM",
            "name": "My Note",
            "description": "Primary Root Growth: is concentrated near the tip and results in the root growing in length. The root tip contains 4 zones of development: The root cap, which protects the area behind it and softens the soil ahead of it by producing a polysaccharide.",
            
        }],
        '2020-11-19': [
            {
            "timestamp": "10:23 PM",
            "name": "Checking the temperature",
            "description": "The cells cannot get enough mineral ions from the soil by diffusion alone. The soils solution is too dilute.",
            
            },
            {
            "timestamp": "10:45 PM",
            "name": "Checking the water tank",           
            },
            {
            "timestamp": "12:45 PM",
            "name": "Noting the plant",
            "description": "Leaves are cloaked by a single layer of cells called the epidermis. It protects the leaf from physical damage and pathogens. A transparent, waxy, colorless cuticle coats the epidermis. ",
            
            },
        ],
        '2020-11-20': [{
            "timestamp": "12:23 PM",
            "name": "My Note",
            "description": "Close relative of bridal veil, the crochet-and-minim buds unfurl into showers of long-stemmed white butterfly flowers right through warm months.",
            
        }],
    });

    const [currentDate, setCurrentDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        setCurrentDate(year + '-' + month + '-' + date );
    }, []);

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
            const currentDate = selectedValue || new Date();
            setDate(currentDate);
            setMode('time');
            setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
        } else {
            const selectedTime = selectedValue || new Date();
            setTime(selectedTime);
            setShow(Platform.OS === 'ios');
            setMode('date');
        }
    };

    const formatDate = (date, time) => {
        return `${time.getHours()}:${time.getMinutes()} - ${date.getDate()}.${date.getMonth() +
          1}.${date.getFullYear()} `;
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showTimepicker = () => {
        showMode('time');
    };
    

    const loadItems = () => {
        const newItems = {};
        Object.keys(items).forEach(key => {newItems[key] = items[key];});
        setItems(newItems)
        console.log(newItems)
    }

    const renderItem = (item) => {
        return (
            <CalendarItem
                eventTimeStamp = {item.timestamp}
                eventTitle = {item.name}
                eventDetails= {item.description}
            />
        )
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Diary</Text>

                <TouchableOpacity style={styles.addButton} onPress={() => {setModalVisible(!modalVisible)}}>
                    <Feather name='plus-circle' size={20} color={Colors.Green} />
                    <Text style={styles.addButtonText}>Add Note</Text>
                </TouchableOpacity>
            </View>
            <Agenda
                // testID={testIDs.agenda.CONTAINER}
                theme={{
                    textDayFontFamily: 'book',
                    dayTextColor: Colors.Black,
                    textSectionTitleColor: Colors.LightGray,
                    textDayHeaderFontFamily: 'bold',
                    dotColor: 'transparent',
                    selectedDayBackgroundColor: Colors.Green,
                    selectedDotColor: 'transparent',
                    todayTextColor: Colors.Green,
                    agendaKnobColor: Colors.Green,
                }}
                style={styles.agenda}
                items={items}
                loadItemsForMonth={loadItems}
                // renderEmptyDate={renderEmptyDate}
                selected={currentDate}
                renderItem = {renderItem}
            />

            <Modal
                style={styles.modalContainer}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>Add Note</Text>
                        <TouchableOpacity
                            style={styles.closeModal}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Feather name="x" size={28} color={Colors.Green} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.timeSelectorContainer}>
                        <Text style={styles.modalOptionTitle}>Date and Time</Text>

                        <TouchableOpacity onPress={showTimepicker}>
                            <Text style={styles.dateTimeTitle}>{formatDate(date, time)}</Text>
                        </TouchableOpacity>

                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                        )}
                    </View>
                    <View style={styles.inputTitlecontainer}>
                        <Text style={styles.inputTitle}>Title</Text>
                        <TextInput
                            multiline={true}
                            style={styles.titleTextInput}
                            placeholder='Add title...'
                
                        />
                    </View>
                    <View style={styles.inputTitlecontainer}>
                        <Text style={styles.inputTitle}>Your Note</Text>
                        <TextInput
                            multiline={true}
                            style={styles.noteInput}
                            placeholder='Add your note...'
                        />
                    </View>
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Add To My Diary</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
     
        </View>
    )
}

export default DiaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontFamily: 'semiBold',
        fontSize: 38,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    addButtonText: {
        marginLeft: 8,
        color: Colors.Green,
        fontFamily: 'semiBold',
    },
    headerContainer: {
        marginTop: 60,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    modalView: {
        marginTop: '70%',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 15
        },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalHeader: {
        fontFamily: 'semiBold',
        fontSize: 20,
        color: Colors.Black,
    },
    modalHeaderContainer: {
        width: windowWidth-40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'center',
    },
    timeSelectorContainer: {
        width: windowWidth,
    },
    timeSelectorContainer: {
        width: windowWidth,
        paddingHorizontal: 20,
    },
    modalOptionTitle: {
        color: Colors.HalfBlack,
        fontFamily: 'book',
        marginTop: 20,
    },
    dateTimeTitle: {
        fontFamily: 'medium',
        fontSize: 24,
        marginTop: 15,
    },
    inputTitlecontainer: {
        marginTop: 24,
        width: windowWidth,
        paddingHorizontal: 20,
    },
    inputTitle: {
        fontFamily: 'book',
        marginBottom: 15,
        color: Colors.HalfBlack,
    },
    titleTextInput: {
        borderWidth: 1,
        borderColor: Colors.Green,
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 18,
        color: Colors.Black,
    },
    submitButton: {
        backgroundColor: Colors.Green,
        borderRadius: 10,
        width: windowWidth-40,
        paddingVertical: 24,
        alignItems: 'center',
        marginTop: 50,
    },
    submitButtonText: {
        fontFamily: 'bold',
        color: '#fff',
        fontSize: 16,
    },
    noteInput: {
        borderWidth: 1,
        borderColor: Colors.Green,
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 18,
        color: Colors.Black,
        height: 140,
    }
})