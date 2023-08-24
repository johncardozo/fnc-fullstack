import { Text, View } from "react-native";
import { coffees } from "../data/coffees";
import { FlatList } from "react-native";

const CoffeeList = () => {
  return (
    <FlatList
      data={coffees}
      ItemSeparatorComponent={<Text></Text>}
      renderItem={({ item }) => (
        <View>
          <Text>{item.id}</Text>
          <Text>{item.product}</Text>
          <Text>{item.brand}</Text>
          <Text>{item.country}</Text>
          <Text>{item.body}</Text>
          <Text>{item.acidity}</Text>
          <Text>{item.notes}</Text>
          <Text>{item.stars}</Text>
        </View>
      )}
      keyExtractor={(coffee) => coffee.id}
    />
  );
};

export default CoffeeList;
