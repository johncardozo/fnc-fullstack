import { useEffect, useState } from "react";
import { Text, FlatList, StyleSheet } from "react-native";

import CoffeeItem from "./CoffeeItem";
import theme from "../theme";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState(null);

  // Código ejecutado al montar el componente
  useEffect(() => {
    const fetchCoffees = async () => {
      const url = "https://64f8eadd824680fd21803236.mockapi.io/coffees";

      try {
        const response = await fetch(url);
        const json = await response.json();
        setCoffees(json);
      } catch (error) {
        console.error(error);
      }
    };

    // Invoca la función para obtener los cafés del backend
    fetchCoffees();
  }, []);

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
