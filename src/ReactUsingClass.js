import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

class ReactUsingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event
    });
  };

  handleSurnameChange = (event) => {
    this.setState({
      surname: event
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'red', borderWidth: 2, }}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <TextInput
          style={{ height: 40, borderColor: 'red', borderWidth: 2, }}
          onChangeText={this.handleSurnameChange}
          value={this.state.surname}
        />
      </View>
    );
  }
}

export default ReactUsingClass;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});
