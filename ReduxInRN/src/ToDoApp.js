
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddToDoList from './containers/AddToDoList'
import VisibleTodos from './containers/VisibleTodos'

export default class ToDoApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AddToDoList />
        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
