import React from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, CheckBox} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, Body, Right,Button} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';
import { ListItem } from "@react-native-material/core";
import {useSelector, useDispatch} from 'react-redux';
import Card  from './Parts/Card'
import Empty from './Parts/Empty'
import {ukloniTransakciju} from '../store/actions/transactionActions'

function Item ({title,price,id,date})  {
   const dispatch = useDispatch();
   return( 
   <View style={styles.item}>
   <CheckBox color='#D2042D' onValueChange = {() => {
     dispatch(ukloniTransakciju(id))
   }}/>
    <Text style={styles.title}>{title}</Text>
    <Text style={{textAlign: 'right', color: price > 0 ? '#00008B':'#880808'}}> {price > 0 ?`€${price}` : `€${Math.abs(price)}` }</Text>
    <Text style={{textAlign: 'center'}}>{date}</Text>
  </View>
  )
}
            
const HomeScreen = ({navigation}) => {
  const {transakcije} = useSelector(state => state.transakcije)
  return(
    <NativeBaseProvider>
    <SafeAreaView>
      <Animated.View style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>
      <Card navigation={navigation}/>
      </Animated.View>
      <View style={{flex:1}}>
      {
        transakcije.length > 0 ?
        <FlatList
        data={transakcije}
        renderItem={({item}) => <Item title={item.title} price={item.price} id={item.id} date = {item.date}/>}
        keyExtractor={item => item.id.toString()}
      />:
       <Empty/>  
      }
      </View>
    </SafeAreaView>
    </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 15,
    paddingHorizontal:15,
    paddingVertical:15,
    flex: 20,
    marginTop: 20,
    fontSize: 28,
    fontWeight:'700',
  },
  title:{
    marginLeft:10,
    fontSize:17,
    fontWeight:'300',
    textAlign:'left',
    marginTop:20
  }
});

export default HomeScreen;

