import { Text, View } from "react-native";
import { coffees } from "../data/coffees";

const CoffeeList = () => {
  return (
    <View>
      {coffees.map((coffee) => (
        <View key={coffee.id}>
          <Text>{coffee.id}</Text>
          <Text>{coffee.product}</Text>
          <Text>{coffee.brand}</Text>
          <Text>{coffee.country}</Text>
          <Text>{coffee.body}</Text>
          <Text>{coffee.acidity}</Text>
          <Text>{coffee.notes}</Text>
          <Text>{coffee.stars}</Text>
          <Text>--------------</Text>
        </View>
      ))}
    </View>
  );
};

export default CoffeeList;
