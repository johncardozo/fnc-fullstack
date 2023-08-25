import { StyleSheet, Text } from "react-native";

const StyledText = ({ blue, bold, children, big, small }) => {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "gray",
  },
  bold: {
    fontWeight: "bold",
  },
  blue: {
    color: "blue",
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 12,
  },
});

export default StyledText;
