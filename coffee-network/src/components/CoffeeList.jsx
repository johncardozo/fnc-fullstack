import { Text, FlatList, StyleSheet } from "react-native";

import { coffees } from "../data/coffees";
import CoffeeItem from "./CoffeeItem";

import theme from "../theme";

const CoffeeList = () => {
  return (
    <FlatList
      data={coffees}
      style={styles.container}
      renderItem={({ item }) => <CoffeeItem coffee={item} />}
      keyExtractor={(coffee) => coffee.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.listBackground,
  },
});

export default CoffeeList;
