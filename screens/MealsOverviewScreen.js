import { MEALS, CATEGORIES } from '../data/dummy-data';

import MealsList from '../components/mealsList/MealsList';

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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
