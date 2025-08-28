import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealsDetails from '../components/MealsDetails';
import List from '../components/List';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonHandler = () => {
    console.log('pressed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton title='Tap' onPress={headerButtonHandler} color="white" icon="star"/>;
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
          <List data={selectedMeal.ingredients} />

          <Text style={styles.subtitle}>Steps</Text>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 35,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  detailText: {
    color: 'white',
  },
  itemContainer: {
    width: '80%',
  },
  outterContainer: {
    alignItems: 'center',
  },
});
