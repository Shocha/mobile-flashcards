import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'



class Quiz extends Component {
    render() {
        return (<View>
            <Text>Quiz here</Text>
        </View>)
    }
}

export default connect()(Quiz)
