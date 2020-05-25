import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'



class DeckList extends React.Component {
    state = {
        ready: false
    }

    componentDidMount = () => {
        const { dispatch } = this.props

        getDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks))
            }).then(() => this.setState(() => ({
                ready: true,
            })))
    }

    render() {
        const { decks } = this.props

        return (<View style={styles.container}>
            {Object.keys(decks).map((deck) => {

                return (
                    <View key={deck}>
                        <Text>{deck}</Text>

                        <Button onPress={() => this.props.navigation.navigate('DeckView', { id: deck })} title="view deck">
                        </Button>
                    </View>
                )
            })}


        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
function mapStateToProps(decks) {
    return decks
}

export default connect(mapStateToProps)(DeckList)