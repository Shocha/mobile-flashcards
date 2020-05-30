import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import {white} from '../utils/colors'

export default function Button(props) {
    return (
        <TouchableOpacity onPress={props.onPressHandler}
            style={styles.btnStyle}>
            <Text style={styles.txtStyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth:2,
        width:120,
        height:40,
        backgroundColor:'#3cb371',
        flex:1
    },
    txtStyle: {
        color: white,
        alignSelf: 'center'
    }
})