import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const StyledText = ({ children, color, fontSize, fontWeight, ...props }) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "heading" && styles.heading,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
  ];
  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.normal,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  heading: {
    fontSize: theme.fontSizes.heading,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
});

export default StyledText;
