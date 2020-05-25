import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {getData} from '../utils/api'

class DeckView extends Component{
    render(){
        const deck=this.props.navigation.state.params.Id
        const decks=getData()
        return(
            <View styles={styles.container}>
                <Text>{decks[deck].title}</Text>
                <Text>{decks[deck].questions.length}</Text>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default DeckView