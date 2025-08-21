import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CatergoriesScreen from './screens/CatergoriesScreen.js';
import MealsOverviewScreen from './screens/MealsOverviewScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='black' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Meals Categories' component={CatergoriesScreen} />
          <Stack.Screen name='Meals Details' component={MealsOverviewScreen} />
        </Stack.Navigator>
        {/* <CatergoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
