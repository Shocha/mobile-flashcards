import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getData } from '../utils/api'
import { connect } from 'react-redux'


class DeckView extends Component {
    render() {

        return (
            <View styles={styles.container}>
                <Text>{this.props.deck.title}</Text>
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

function mapStateToProps(decks, { navigation }) {
    const { deckId } = navigation.state.params
    const deck = decks[deckId]
    return {
        deck,
        deckId
    }
}
export default connect(mapStateToProps)(DeckView)