import React from 'react'
import {View, Text, StyleSheet,SafeAreaView,TextInput} from 'react-native'
import {Input} from 'react-native-form-component'

function DodajTransakciju() {

  return(
    <SafeAreaView>
      <TextInput
      style = {styles.input}
      placeholder="Unesite opis Transakcije"
      keyboardType="default"
      ></TextInput>

      <TextInput
      style = {styles.input}
      placeholder="Unesite Iznos Transakcije"
      keyboardType="numeric"
      ></TextInput>

      <TextInput
      style = {styles.input}
      placeholder="Unesite Datum Transakcije"
      keyboardType="numeric"
      ></TextInput>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DodajTransakciju;