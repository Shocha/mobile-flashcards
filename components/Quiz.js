import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'



class Quiz extends Component {

    state = {
        start:0
    }
    render() {
        const { questions } = this.props
        const {start}=this.state
        console.log(this.props.deck)
        return (<View>
            <Text>Quiz Page</Text>
        <Text>{questions[start].question}</Text>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
        </View>)
    }
}
function mapStateToProps(decks, { route }) {
    const deck = route.params.id
    const title = deck.title
    const questions = deck.questions
    console.log(questions)
    const cardQuant = questions.length
    return {
        deck,
      title,
    questions,
    cardQuant,
    }
}

export default connect(mapStateToProps)(Quiz)
