import { Text, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const CoffeeItem = ({ coffee }) => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" fontSize="heading">
        {coffee.product}
      </StyledText>
      <StyledText fontSize="subheading">{coffee.brand}</StyledText>
      <StyledText color="secondary">{coffee.country}</StyledText>
      <StyledText>{coffee.body}</StyledText>
      <StyledText>{coffee.acidity}</StyledText>
      <StyledText>{coffee.notes}</StyledText>
      <StyledText>{coffee.stars}</StyledText>
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
