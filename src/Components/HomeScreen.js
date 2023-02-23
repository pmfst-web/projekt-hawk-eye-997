import React from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right,Button} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';

const HomeScreen = ({navigation}) => {
  return(
    <NativeBaseProvider>
    <SafeAreaView>
      <Animated.View style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>
      <LinearGradient colors={['red', 'yellow', 'green']}
      style={{...styles.Box}}
      >
      <View style = {{width:'70%', alignItems:'flex-start'}}>
        <Text style={{fontSize: 15, color:'#fff', fontFamily:'Lato-Regular', fontWeight:'600,'}}>
        Trenutno stanje računa:</Text>
        <Text style = {{
          fontFamily: 'Lato-Medium',
          fontSize: 32,
          color: '#fff',
          fontWeight:'700'

        }}>€5000</Text>
        <Text style = {{
          marginTop:67,
          color: '#fff',
          fontFamily: 'Lato-Regular',
          fontSize: 18,
          fontWeight: '700'
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
          padding: 10,
          marginTop:32,
          borderWidth:3,
          borderColor: '#fff',
          backgroundColor: '#0047AB',
          alignItems: 'center',
          justifyContent: 'center',
        }} onPress={() => {
              navigation.navigate('Dodaj')}}>
        
        <Text style={{color: '#fff', fontWeight:'300',fontSize:10}}>Nova transakcija</Text>
        </Button>
                <Text style={{
                marginTop:17,
                color: '#fff',
                fontSize: 10,
                fontWeight: '700',
                }}>Troškovi
                </Text>
              <Text style={{
                  color:'#fff',
                  fontSize:15,
                  fontWeight:'700',
                }}>€ 20000
              </Text>
            </View>
          </View>        
        </LinearGradient>  
      </Animated.View>
    </SafeAreaView>
    </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
});

export default HomeScreen;

