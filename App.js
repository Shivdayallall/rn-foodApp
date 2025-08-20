import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatergoriesScreen from './screens/CatergoriesScreen.js';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style='black' />
      <CatergoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
