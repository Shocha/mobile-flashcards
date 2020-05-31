import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'



class Quiz extends Component {

    state = {
        start: 0,
        showAnswer: false,
        score:0,

    }

    showCorrectAns = () => {
        this.setState(() =>
            ({ showAnswerArea: true }));
    };


    result = (answer) => {
        if (answer) {
            this.setState((current) => ({
                score: current.score + 1
            }))
        }
        this.setState((current) => ({
            start: current.start + 1,
        }))
    }

    onRestart = () => {
        this.setState(() => ({
            score: 0,
            start: 0,
            showAnswer: false
        }))
    }

    onGoBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        const { questions } = this.props
        const { start } = this.state
        console.log(this.props.deck)

        if (this.props.cardQuant === start) {

            return (<View>
                <Text>Your Score is: {score}/{count}</Text>
                <TouchableOpacity onPressHandler={this.onRestart}>
                    <Text>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPressHandler={this.onGoBack}>Back To Deck</Text>
                </TouchableOpacity>
            </View>)
        }
        return (<View>
            <Text>Quiz Page</Text>
            <Text>{questions[start].question}</Text>

            {!this.state.showAnswerArea && (
                <View>
                    <TouchableOpacity
                        onPress={this.showCorrectAns}>
                        <Text >Show Answer</Text>
                    </TouchableOpacity>
                </View>
            )}

            {this.state.showAnswerArea && (
                <View>
                    <Text >Show Answer</Text>
                    <Text >{questions[start].answer}</Text>

                    <Text >Did you get the answer?</Text>



                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => this.result(true)}>
                            <Text >Correct</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => this.result(false)}>

                            <Text >Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>)
    }
}
function mapStateToProps(decks, { route, navigation }) {
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
        navigation
    }
}

export default connect(mapStateToProps)(Quiz)
