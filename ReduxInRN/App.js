/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Provider } from 'react-redux';
import ToDoApp from './src/ToDoApp'
import store from './src/store'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native with Redux!</Text>
      <Text style={styles.instructions}>Conference Sessions Checklist</Text>
      <Provider store = {store}>
        <ToDoApp />
      </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
    marginTop: 25
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  },
});
