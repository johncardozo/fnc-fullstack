import { Text, View } from "react-native";

const CoffeeStars = ({ stars }) => {
  // Genera las estrellas a mostrar
  const starsString = "⭐️".repeat(stars);
  return (
    <View>
      <Text>{starsString}</Text>
    </View>
  );
};

export default CoffeeStars;
