import { Text, FlatList } from "react-native";

import { coffees } from "../data/coffees";
import CoffeeItem from "./CoffeeItem";

const CoffeeList = () => {
  return (
    <FlatList
      data={coffees}
      renderItem={({ item }) => <CoffeeItem coffee={item} />}
      keyExtractor={(coffee) => coffee.id}
    />
  );
};

export default CoffeeList;
