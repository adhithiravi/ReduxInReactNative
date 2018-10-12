
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'

import styles from './styles/AddSessionStyles'
import {addSession} from '../actions'

class AddSession extends Component {

  constructor() {
		super()
		this.state = {
			text: ''
		}
	}

  addSession= (text) => {
    this.props.dispatch(addSession(text))
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            placeholder = 'Add New Session Here'
            style= {styles.textInput}
            value = {this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity onPress={()=> this.addSession(this.state.text)}>
            <View style={styles.iconWrapper}>
              <Text style={styles.addText}>Add</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddSession)
