import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getData } from '../utils/api'
import { connect } from 'react-redux'


class DeckView extends Component {
    render() {

        return (
            <View styles={styles.container}>
                <Text>{this.props.deck.title}</Text>
                <Text>{this.props.deck.questions.length}</Text>
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

function mapStateToProps(decks, { route }) {
    const deckId = route.params.id
    const deck = decks[deckId]
    console.log(deck)
    return {
        deck,
        deckId
    }
}
export default connect(mapStateToProps)(DeckView)