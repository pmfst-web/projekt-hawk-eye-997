import React from 'react';
import {LinearGradient } from 'expo-linear-gradient';
import {View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Container, CheckBox, Body, Right,Button} from 'native-base';
import {useSelector} from 'react-redux';


function Card({navigation}){

  const {transakcije} = useSelector((state) => state.transakcije);
  const prices = transakcije.map((transakcije) => transakcije.price)
  const UkupnoTransakcije = prices.reduce((prev,cur) => (prev += cur), 0);
  const Troskovi = prices.filter(price => price<0).reduce((prev,cur) => (prev+=cur),0)*-1;

  return(
     <LinearGradient colors={['red', 'yellow', 'green']}
      style={{...styles.Box}}
      >
      <View style = {{width:'70%', alignItems:'flex-start'}}>
        <Text style={{fontSize: 15, color:'#fff', fontFamily:'Lato-Regular', fontWeight:'600,'}}>
        Suma svih transakcija:</Text>
        <Text style = {{
          fontFamily: 'Lato-Medium',
          fontSize: 32,
          color: '#fff',
          fontWeight:'700'

        }}>€{UkupnoTransakcije}</Text>
        <Text style = {{
          marginTop:87,
          color: '#fff',
          fontSize: 15,
          fontWeight: '700',
           textAlign:'left'
        }}>1332 **** **** 9871</Text>
      </View>
      <View style={{
        alignItems: 'flex-end',
        width: '30%',
      }}>
      <Text style={{fontSize: 18, color: '#fff', fontFamily:'Lato-Regular'}}>
      MYB
      </Text>
      <View style={{flex:1}}>
        <Button 
          rounded 
          light style={{
          padding: 20,
          marginTop:32,
          borderWidth:1,
          borderColor: '#fff',
          backgroundColor: '#0047AB',
          alignItems: 'center',
          justifyContent: 'center',
        }} onPress={() => {
              navigation.navigate('Dodaj')}}>
        
        <Text style={{color: '#fff', fontWeight:'300',fontSize:15}}>Nova transakcija</Text>
        </Button>
                <Text style={{
                marginTop:17,
                color: '#fff',
                fontSize: 15,
                fontWeight: '700',
                textAlign:'right'
                }}>Troškovi
                </Text>
              <Text style={{
                  color:'#fff',
                  fontSize:20,
                  fontWeight:'700',
                  textAlign:'right'
                }}>€{Troskovi}
              </Text>
            </View>
          </View>        
        </LinearGradient>  

  )
}
const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  }})
export default Card