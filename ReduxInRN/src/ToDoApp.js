
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddSession from './containers/AddSession'
import VisibleSessions from './containers/VisibleSessions'

export default class ToDoApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AddSession/>
        <View>
          <VisibleSessions />
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
    backgroundColor: '#F0FFFF',
  }
});
