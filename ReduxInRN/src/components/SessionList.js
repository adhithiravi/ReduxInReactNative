
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const SessionList = ({ sessions, toggleSession }) => (
  <View>
    {sessions.map(session =>
      <TouchableOpacity key={session.id} onPress={()=>toggleSession(session.id)}>
        <Text style={{fontSize:24,
          textDecorationLine: session.completed ? 'line-through' : 'none'
        }}>{session.text}</Text>
      </TouchableOpacity>
    )}
    </View>
)

export default SessionList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
