import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
/*Redux*/
import {Provider} from 'react-redux';

/* Ekrani - Komponente */
import HomeScreen from './src/Components/HomeScreen';
import DodajTransakciju from './src/Components/DodajTransakciju';
import AnimatedExample from './Lozinka'

/* Spremnik  */
import store from './src/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Lozinka"
            component={AnimatedExample}
            options={{
            title: 'Dobrodošao korisniče!',
            }}
          />
          <Stack.Screen
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'MyBank - HomeScreen',
            }}
          />
          <Stack.Screen
            name="Dodaj"
            component={DodajTransakciju}
            options={{title: 'Nova Transakcija'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
   </Provider>
  );
}

export default App;
