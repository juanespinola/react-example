import React, { useState, useEffect } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import Bancard from '../bancard/bancard-checkout';

import Iframe from '../components/Iframe';
import { sendData, addNewCard } from '../classes/vpos';




export const HomeScreen = () => {
    
    let public_key = '1KnUfDsd4TcmlDypOxm9FEaK6AF8lENx';
    let private_key = 'zMrQPjpyXtEPI8.yuKwo2eP32GW(4yCVqrdo6oJ4';
    const bancard = new Bancard;
    

    // const [state, setstate] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    // });

    // const handleChangeText = (input, value) => {
    //     setstate({...state, [input]: value })
    // }; 

    // const createNewUser = async () => {
    //     if(state.name === ''){
    //         alert('Tu campo Nombre esta vacio')
    //     } else {
            
    //         await firestore.collection('users')
    //         .add({
    //             name: state.name,
    //             email: state.email,
    //             phone: state.phone,
    //         });

    //     }
    // };

    const prueba = async () => {
       
        const respuesta = sendData(public_key, private_key, 3, 10.000, 'PYG', 'si', '', '');
        await respuesta;
    }

    const addnewcard = async () => {
        const respuesta = await addNewCard(public_key, private_key, 3, 1, 'prueba@prueba.com', 'si');
        // console.log(respuesta.status);
        // console.log(respuesta.process_id);
        

        // console.log(bancard.Cards.createFrom())
        bancard.Cards.createForm('iframe-container2', respuesta.process_id, styles.bancard);
        // console.log(Bancard.Cards.createForm('iframe-container2', respuesta.process_id, styles.bancard))
    }

    return (    
        
            <ScrollView style={styles.container}>
                <View style={styles.inputGroup}>
                    <TextInput 
                        placeholder='Name User'
                        onChangeText={ (value) => handleChangeText('name', value) }
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput 
                        placeholder='Email User'
                        onChangeText={ (value) => handleChangeText('email', value) }
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput 
                        placeholder='Phone User'
                        onChangeText={ (value) => handleChangeText('phone', value) }
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Button title='Send Data' onPress={ () => prueba() }/>
                </View>

                <View style={styles.inputGroup}>
                    <Button title='Add New Card' onPress={ () => addnewcard() }/>
                </View>

               <Iframe></Iframe>

            </ScrollView>    
        
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 35
    },
    inputGroup: {
        flex: 1, 
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    bancard: {

        backgroundColor: "rgb(235, 235, 235)", 
        // backgroundColor: "#4faed1", 
        // button-text-color: "#fcfcfc", 
        // button-border-color: "#dddddd", 
        // input-background-color: "#fcfcfc", 
        // input-text-color: "#111111", 
        // input-placeholder-color: "#111111"
    
    }

});

