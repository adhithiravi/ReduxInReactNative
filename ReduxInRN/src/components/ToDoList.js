
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ToDoList = ({ todos, toggleTodo }) => (
  <View>
    {todos.map(todo =>
      <TouchableOpacity key={todo.id} onPress={()=>toggleTodo(todo.id)}>
        <Text style={{fontSize:24,
          textDecorationLine: todo.completed ? 'line-through' : 'none'
        }}>{todo.text}</Text>
      </TouchableOpacity>
    )}
    </View>
)

export default ToDoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
