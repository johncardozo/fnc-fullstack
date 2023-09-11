import { Text, FlatList, StyleSheet } from "react-native";

import CoffeeItem from "./CoffeeItem";
import theme from "../theme";
import useCoffees from "../hooks/useCoffees";

const CoffeeList = () => {
  // Utiliza el custom hook para obtener los datos del endpoint
  const { coffees } = useCoffees();

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
