import { Text, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import CoffeeItemHeader from "./CoffeeItemHeader";

const CoffeeItem = ({ coffee }) => {
  return (
    <View style={styles.container}>
      <CoffeeItemHeader coffee={coffee} />
      <StyledText color="secondary" fontSize="subheading">
        {coffee.brand}, {coffee.country}
      </StyledText>
      <StyledText>
        {coffee.body}, {coffee.acidity}, {coffee.notes}
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
