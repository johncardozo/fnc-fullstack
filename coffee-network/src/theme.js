import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#000",
    textSecondary: "#69645C",
    listBackground: "#CBC2B3",
    cardBackground: "#fff",
    appBarBackground: "#A2102A",
  },
  fontSizes: {
    heading: 20,
    subheading: 17,
    normal: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Times New Roman",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "800",
  },
};

export default theme;
