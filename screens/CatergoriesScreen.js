import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data.js';
import CategoryGridTile from '../components/CategoryGridTile.js';

const CatergoriesScreen = ({ navigation }) => {
  // Helper function to help the component render the data to the screen
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Meals Details', {
        categoryID: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CatergoriesScreen;

const styles = StyleSheet.create({});
