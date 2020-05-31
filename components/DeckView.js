import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Button from './Button'

class DeckView extends Component {
    render() {
        const {deck}=this.props
        return (
            <View styles={styles.container}>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length}</Text>
                <Button text="Add Card" onPressHandler={()=>this.props.navigation.navigate(
                'AddNewCard',{deck, id: deck,})}
               />
                <Button text="Start Quiz" onPressHandler={()=>this.props.navigation.navigate(
                'Quiz',{deck, id: deck,})}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(decks, { route,navigation }) {
    const deckId = route.params.id
    const deck = decks[deckId]
    console.log(deck)
    return {
        deck,
        navigation
    }
}
export default connect(mapStateToProps)(DeckView)