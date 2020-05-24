import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import Decklist from './components/DeckList'
import AddDeck from './components/AddDeck'
import { Ionicons } from '@expo/vector-icons'
import { blue, white ,black} from './utils/colors'


const Tabs = TabNavigator({
  Decklist: {
    screen: Decklist,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={20} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={20} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    style: {
      height: 56,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


export default class App extends React.Component {
  render() {
    return (
      <View >
        <Tabs/>
      </View>
    );
  }
}

