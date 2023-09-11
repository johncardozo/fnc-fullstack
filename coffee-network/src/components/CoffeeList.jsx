import { Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";

import CoffeeItem from "./CoffeeItem";
import theme from "../theme";
import useCoffees from "../hooks/useCoffees";

const CoffeeList = () => {
  // Utiliza el custom hook para obtener los datos del endpoint
  const { coffees } = useCoffees();

  return (
    <>
      {coffees ? (
        <FlatList
          data={coffees}
          style={styles.container}
          renderItem={({ item }) => <CoffeeItem coffee={item} />}
          keyExtractor={(coffee) => coffee.id}
        />
      ) : (
        <ActivityIndicator size="large" color="red" style={styles.loading} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.listBackground,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CoffeeList;
