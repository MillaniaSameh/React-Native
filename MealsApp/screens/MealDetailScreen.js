import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerFunctionPressHandler() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      title:
        selectedMeal.title.length > 20
          ? selectedMeal.title.slice(0, 20) + " ..."
          : selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="yellow"
            onPress={headerFunctionPressHandler}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.mainContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    marginHorizontal: 12,
    marginBottom: 40,
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    marginTop: 20,
    textAlign: "center",
    color: "white",
  },

  detailText: {
    color: "white",
  },

  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
});
