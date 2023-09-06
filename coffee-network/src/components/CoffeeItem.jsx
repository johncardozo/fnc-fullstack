import { Image, View, StyleSheet, Platform } from "react-native";
import StyledText from "./StyledText";
import CoffeeItemHeader from "./CoffeeItemHeader";

import theme from "../theme";

const CoffeeItem = ({ coffee }) => {
  const platform = Platform.OS === "android" ? "🤖" : "🍏";
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={{ uri: coffee.img }} />
      <CoffeeItemHeader coffee={coffee} />
      <StyledText color="secondary" fontSize="subheading">
        {coffee.brand}, {coffee.country}
      </StyledText>
      <StyledText>
        {platform} {coffee.body}, {coffee.acidity}, {coffee.notes}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Platform.select({
      android: theme.colors.cardBackground,
      ios: "#A2102A",
      default: "yellow",
    }),
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
  },
  product: {
    fontWeight: "900",
    color: "brown",
  },
  banner: {
    height: 50,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default CoffeeItem;
