import { StyleSheet, Text, View, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route }) => {
  const catID = route.params.categoryID;

  // Return a filtered list of meals that belonh to a specfic category
  const displayedMeals = MEALS.filter((mealsItem) => {
    return mealsItem.categoryIds.indexOf(catID) >= 0;
  });

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title} />;
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
