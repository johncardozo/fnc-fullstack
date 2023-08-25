import { Text, View, StyleSheet } from "react-native";

const CoffeeItem = ({ coffee }) => {
  return (
    <View style={styles.container}>
      <Text>{coffee.id}</Text>
      <Text style={styles.product}>{coffee.product}</Text>
      <Text>{coffee.brand}</Text>
      <Text>{coffee.country}</Text>
      <Text>{coffee.body}</Text>
      <Text>{coffee.acidity}</Text>
      <Text>{coffee.notes}</Text>
      <Text>{coffee.stars}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  product: {
    fontWeight: "900",
    color: "brown",
  },
});

export default CoffeeItem;
