const { View, StatusBar, StyleSheet, Text } = require("react-native");
import { Link } from "react-router-native";
import theme from "../theme";
import StyledText from "./StyledText";

const AppBarLink = ({ children, to }) => {
  return (
    <Link to={to}>
      <StyledText style={styles.text}>{children}</StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarLink to="/">The Coffee Network</AppBarLink>
      <AppBarLink to="/login">Login</AppBarLink>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    color: theme.colors.cardBackground,
    fontSize: theme.fontSizes.heading,
  },
});

export default AppBar;
