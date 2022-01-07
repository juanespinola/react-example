// import React, { useState } from 'react'
// import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
// // import app from "../database/firebase";


// export const CreateUser = () => {
    
//     const [state, setstate] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });

//     const handleChangeText = (input, value) => {
//         setstate({...state, [input]: value })
//     }; 

//     const createNewUser = async () => {
//         if(state.name === ''){
//             alert('Tu campo Nombre esta vacio')
//         } else {
            
//             await firestore.collection('users')
//             .add({
//                 name: state.name,
//                 email: state.email,
//                 phone: state.phone,
//             });

//         }
//     };

//     return (    
//             <ScrollView style={styles.container}>
//                 <View style={styles.inputGroup}>
//                     <TextInput 
//                         placeholder='Name User'
//                         onChangeText={ (value) => handleChangeText('name', value) }
//                     />
//                 </View>
//                 <View style={styles.inputGroup}>
//                     <TextInput 
//                         placeholder='Email User'
//                         onChangeText={ (value) => handleChangeText('email', value) }
//                     />
//                 </View>
//                 <View style={styles.inputGroup}>
//                     <TextInput 
//                         placeholder='Phone User'
//                         onChangeText={ (value) => handleChangeText('phone', value) }
//                     />
//                 </View>
//                 <View>
//                     <Button title='Save User' onPress={ () => createNewUser() }/>
//                 </View>
//             </ScrollView>    
        
//     )

// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         padding: 35
//     },
//     inputGroup: {
//         flex: 1, 
//         padding: 0,
//         marginBottom: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#cccccc'
//     }
// });
