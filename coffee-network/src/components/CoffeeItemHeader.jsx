import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

const CoffeeItemHeader = ({ coffee }) => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" fontSize="heading">
        {coffee.product}
      </StyledText>
      <StyledText>{coffee.stars}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CoffeeItemHeader;
