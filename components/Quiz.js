import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { lightRed, lime, blue, orange } from '../utils/colors'
import Button from './Button'

class Quiz extends Component {

    state = {
        start: 0,
        showAnswer: false,
        score: 0,
        moveOut:'Answer'
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
            moveOut:'Answer'
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
        const { questions, cardQuant } = this.props
        const { start, score } = this.state

        if (cardQuant == 0) {
            return (
                <View>
                    <Text style={styles.title}>No Cards to display</Text>
                </View>
            )
        }

        if (cardQuant === start) {
            {
                clearLocalNotification().then(setLocalNotification())
            }
            return (<View>
                <Text style={styles.title}>Your Score is: {score}/{cardQuant}</Text>
                <Button onPressHandler={() => this.onRestart()} text='Restart Quiz'/>

                <Button onPressHandler={() => this.onGoBack()} text='Back To Deck'/>
            </View>)
        }
        return (<View>
            <Text style={styles.title}>Quiz Page</Text>
            <Text style={styles.nrmtxt}>{questions[start].question}</Text>

            {!this.state.showAnswerArea && (
                <View>
                    <Button
                        onPressHandler={()=>this.showCorrectAns()} text='Show Answer' />
                </View>
            )}

            {this.state.showAnswerArea && (
                <View>

                    <Text style={styles.nrmtxt}>{questions[start].answer}</Text>

                    <Text style={styles.nrmtxt}>Did you get the answer?</Text>

                    <View style={{ flex: 1 }}>
                        <Button
                            onPressHandler={() => this.result(true)}
                            text='Correct' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Button text='Incorrect' onPressHandler={() => this.result(false)} />
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
    const cardQuant = questions.length
    return {
        title,
        questions,
        cardQuant,
        navigation
    }
}
const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 30,
        margin: 5,
    },
    btn: {
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        width: 120,
        height: 40,
        backgroundColor: lightRed,
        flex: 1
    },
    btnscs: {
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        width: 120,
        height: 40,
        backgroundColor: lime,
        flex: 1
    },

    btntxt: {
        justifyContent: "center",
        alignSelf: 'center',
        margin: 5,
    },
    nrmtxt: {
        alignSelf: 'center',
        fontSize: 20,
        margin: 5,
        padding: 20
    },
    btnbl: {
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        width: 120,
        height: 40,
        backgroundColor: blue,
        flex: 1


    },
    btnor: {
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        width: 120,
        height: 40,
        backgroundColor: orange,
        flex: 1
    },
    btnylw: {
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        width: 120,
        height: 40,
        backgroundColor: '#ffff1a',
        flex: 1
    }


})
export default connect(mapStateToProps)(Quiz)
