import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Decklist from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckView from './components/DeckView';
import { Ionicons } from '@expo/vector-icons';
import { blue, white } from './utils/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: Platform.OS === 'ios' ? blue : white,
            style: {
              height: 90,
              shadowColor: 'rgba(0, 0, 0, 0.24)',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 6,
              shadowOpacity: 1,
            },
          }}
        >
          <Tabs.Screen
            name="Decklist"
            component={Decklist}
            options={{
              tabBarLabel: 'My Decks',
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-albums" size={20} color={tintColor} />
              ),
            }}
          />
          <Tabs.Screen
            name="AddDeck"
            component={AddDeck}
            options={{
              tabBarLabel: 'Add Deck',
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-add-circle" size={20} color={tintColor} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}
