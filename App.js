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
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name='Meals Categories'
            component={CatergoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name='Meals Details' component={MealsOverviewScreen} />
        </Stack.Navigator>
        {/* <CatergoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
