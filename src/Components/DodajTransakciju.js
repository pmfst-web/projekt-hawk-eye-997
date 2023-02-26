import React, {useState} from 'react'
import {StyleSheet,Button,TextInput,SafeAreaView} from 'react-native'
import {Input} from 'react-native-form-component'
import {useDispatch} from 'react-redux';
import {dodajTransakciju} from '../store/actions/transactionActions';
function DodajTransakciju() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const onPress= () =>{
    if(!title || !price || !date){
      return alert('Molimo Vas da popunite sva polja!')
    }

    const id = Math.floor(Math.random()*600000);

    const novaTransakcija={
      id,
      title,
      price: +price,
      date
    };
    dispatch(dodajTransakciju({...novaTransakcija}))
  }
  return(
    <SafeAreaView>
      <TextInput
      style = {styles.input}
      placeholder="Unesite opis Transakcije" onChangeText = {title => setTitle(title)}
      keyboardType="default"
      ></TextInput>

      <TextInput
      style = {styles.input}
      placeholder="Unesite Iznos Transakcije" onChangeText = {price => setPrice(price)}
      keyboardType="numeric"
      onSubmitEditing={onsubmit}
      ></TextInput>

      <TextInput
      style = {styles.input}
      placeholder="Unesite Datum Transakcije" onChangeText = {date => setDate(date)}
      keyboardType="numeric"
      ></TextInput>

      <Button color = "#00008B" title = "Potvrdi Transakciju" onPress={onPress}></Button>
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