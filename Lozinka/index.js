import React from 'react';
import {Button, Text, View, StyleSheet,Image,TextInput} from 'react-native';
import {useState} from 'react';

/* LOZINKA JE 1234 */
const Home = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === '1234') {
      navigation.navigate('Home');
    } else {
      alert('Lozinka nije ispravna ili je niste upisali!');
    }
  };
  return(
    <View style={styles.container}>
        <Text style={styles.naslovni}>Dobrodošli u aplikaciju MS-Banking</Text>
        <Image
          source={{uri: 'https://t4.ftcdn.net/jpg/04/53/70/41/240_F_453704176_fRLaZTHGmRZmM6BpZZe2PT17DBsjb4md.jpg'}}
          style={{ width: 340, height: 230 }}
        />
        <Text style={styles.headerText}>Molim unesite lozinku za pristup!</Text>
        <TextInput
          style={{
            height: 45,
            width: '95%',
            borderColor: 'gray',
            borderWidth: 2,
            marginTop:25,
            marginBottom:25
          }}
          placeholder="Mjesto lozinke:"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText= {(text) => setPassword(text)}
          value={password}
        />
        <Button style={styles.button} color="#00008B"
  title = "Nastavi na račun" onPress={handleLogin} ></Button>
      </View>  

  )
}
export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBF00',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  naslovni: {
    fontSize: 35,
    fontFamily: 'Cochin',
    justifyContent: 'top',
    alignItems: 'top',
    marginBottom:30
  },

});
