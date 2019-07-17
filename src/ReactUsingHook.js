import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function ReactUsingHook(props) {
  // const [name, setName] = useState('Mary'); // useState is a hook. Pass in the inital state, in this case 'Mary'.
  // a hook is a function provided by React that lets you hook into React features from
  // your function components.

  // if we have more state variables, we declare them again using useState.
  const [surname, setSurname] = useState('Poppins');

  // function handleNameChange(e) {
  //   setName(e);
  // }

  // Another possible way to do this - we can extract the function out as a common function useFormInput.
  const name = useFormInput('Mary');

  function handlesurnameChange(e) {
    setSurname(e);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'red', borderWidth: 2, }}
        onChangeText={name.onChange}
        value={name.value}
      />
      <TextInput
        style={{ height: 40, borderColor: 'red', borderWidth: 2, }}
        onChangeText={handlesurnameChange}
        value={surname}
      />
    </View>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e);
  }
  return {
    value,
    onChange: handleChange,
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});
