
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import AddToDoListStyles from './styles/AddToDoListStyles'
import {addToDo} from '../actions'

import {connect} from 'react-redux'

class AddToDoList extends Component {

  constructor() {
		super()
		this.state = {
			text: ''
		}
	}

  addTodo = (text) => {
    this.props.dispatch(addToDo(text))
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder = 'Add New Item Here'
            style= {AddToDoListStyles.textInput}
            value = {this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity onPress={()=> this.addTodo(this.state.text)}>
            <View style={AddToDoListStyles.iconWrapper}>
              <Text>Add</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddToDoList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
