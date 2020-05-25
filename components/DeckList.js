import React,{Component} from 'react'
import { Stylesheet, Text, View } from 'react-native'
import {getData} from '../utils/api'

class DeckList extends React.Component{
    render(){
        const decks=getData()

        return(<View style={styles.container}>
            {Object.keys(decks).map((deck)=>{
                const {title,questions}=decks[deck]
                return(
                    <View key={deck}>
                    <Text>{title}</Text>
                    <Text>{questions.length}</Text>
                    </View>
            )
            })}
            

        </View>)
    }
}
const styles= Stylesheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default DeckList