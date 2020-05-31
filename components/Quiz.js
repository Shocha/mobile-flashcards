import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'



class Quiz extends Component {

    state={

    }
    render() {
        return (<View>
            <Text>Quiz here</Text>
        </View>)
    }
}
function mapStateToProps(decks,{navigation}){
    const deckId=navigation.state.params
    const deck= decks[deckId]

    return{
deck
    }
}

export default connect()(Quiz)
