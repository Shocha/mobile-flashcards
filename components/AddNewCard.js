import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addNewCard } from '../utils/api'
import { addCard } from '../actions'

class AddNewCard extends Component {
    state = {
        questionCard: '',
        answerCard: ''
    }

    changeAnswer = (value) => {
        this.setState(() => {
            questionCard: value
        })
    }
    changeQuestion = () => {
        this.setState(() => {
            answerCard: value
        })
    }

    submitCard = () => {
        const title = this.props.deckId
        const { dispatch, navigation } = this.props
        card = {
            questionCard,
            answerCard
        }

        addNewCard(title, card).then(() => {
            dispatch(addCard(title, card))
        })
        navigation.goBack()
    }
    render() {
        return (<View >
            <Text style={styles.title}>Add a Question Card!</Text>
            <TextInput onChangeText={this.changeQuestion} style={styles.input} value={this.state.questionCard} />
            <TextInput onChangeText={this.changeAnswer} style={styles.input} value={this.state.answerCard} />
            <TouchableOpacity onPress={this.submitCard} disabled={questionCard == '' || answerCard == ''} >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>

        )
    }
}
const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 30,
        margin: 5,
    },
    input: {
        margin: 20,
        height: 50,
        padding: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#ffffff'
    }
})

{/*margin: 10,
borderColor: summerBlue,
borderWidth: 1,
borderRadius: 2,
padding: 4,
width: 300,
fontSize: 24,
submitBtn: {
    marginTop: 200,
    backgroundColor: summerBlue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 200,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
},
submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
}*/}

function mapStateToProps({ navigation, route }) {
    const deckId = route.params.id
    console.log(deckId)
    return {
        deckId,
        navigation
    }
}
export default connect(mapStateToProps)(AddNewCard)
