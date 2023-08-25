import { Text, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const CoffeeItem = ({ coffee }) => {
  return (
    <View style={styles.container}>
      <StyledText big>{coffee.id}</StyledText>
      <Text style={styles.product}>{coffee.product}</Text>
      <Text>{coffee.brand}</Text>
      <StyledText>{coffee.country}</StyledText>
      <Text>{coffee.body}</Text>
      <Text>{coffee.acidity}</Text>
      <Text>{coffee.notes}</Text>
      <StyledText bold big blue>
        {coffee.stars}
      </StyledText>
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
