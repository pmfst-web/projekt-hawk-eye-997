import React, {useState} from 'react'
import {StyleSheet,Button,TextInput,SafeAreaView, View} from 'react-native'
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
    <View style={styles.container}>
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

      <Button style={styles.button} alignItems='center' color = "#00008B" title = "Potvrdi Transakciju" onPress={onPress}></Button>
   </SafeAreaView>
   </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 3,
    backgroundColor: "white",
    width: '95%',
    borderColor: 'black',
    marginTop:25,
    marginBottom:25,

  },
  container:
  {
    flex: 10,
    alignItems: 'center',
    backgroundColor: '#FFBF00',
  },
  button:{
    borderRadius:100,
    elevation:3,
    marginTop:20
  }
});

export default DodajTransakciju;