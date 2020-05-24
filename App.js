import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Decklist from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import { Ionicons } from '@expo/vector-icons'
import { blue, white } from './utils/colors'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator({
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



const NavTabs = createAppContainer(Tabs)

export default class App extends React.Component {
  render() {
    return (
      <View >
        <NavTabs />
      </View>
    );
  }
}

