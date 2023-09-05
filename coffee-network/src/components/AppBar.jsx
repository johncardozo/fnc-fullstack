const { View, StatusBar, StyleSheet, Text } = require("react-native");
import theme from "../theme";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Coffee Network</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  text: {
    color: theme.colors.cardBackground,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

export default AppBar;
