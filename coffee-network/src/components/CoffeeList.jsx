import { Text, View } from "react-native";
import { coffees } from "../data/coffees";

const CoffeeList = () => {
  return (
    <View>
      {coffees.map((coffee) => (
        <View key={coffee.id}>
          <Text>{coffee.product}</Text>
        </View>
      ))}
    </View>
  );
};

export default CoffeeList;
