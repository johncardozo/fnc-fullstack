import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import CoffeeStars from "./CoffeeStars";

const CoffeeItemHeader = ({ coffee }) => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" fontSize="heading">
        {coffee.product}
      </StyledText>
      <CoffeeStars stars={coffee.stars} />
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
