import { StyleSheet, Text, View, FlatList } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';

import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catID = route.params.categoryID;

  // Return a filtered list of meals that belonh to a specfic category
  const displayedMeals = MEALS.filter((mealsItem) => {
    return mealsItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    // Get the title from the categories data array
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageURL={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
