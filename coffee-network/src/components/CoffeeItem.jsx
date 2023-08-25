import { Text, View } from "react-native";

const CoffeeItem = ({ coffee }) => {
  return (
    <View>
      <Text>{coffee.id}</Text>
      <Text>{coffee.product}</Text>
      <Text>{coffee.brand}</Text>
      <Text>{coffee.country}</Text>
      <Text>{coffee.body}</Text>
      <Text>{coffee.acidity}</Text>
      <Text>{coffee.notes}</Text>
      <Text>{coffee.stars}</Text>
    </View>
  );
};

export default CoffeeItem;
