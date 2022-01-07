import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class iframe extends Component {

    constructor(props){
        super(props);
        this.ref = React.createRef();
    }

    render() {
        return (
            <View ref='iframe-container2'>
                
            </View>
        )
    }
}

