import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";
import { Route, Routes } from "react-router-native";
import CoffeeList from "./CoffeeList";

// Carga dinámica de componentes dependiendo de la plataforma
const AppBar = Platform.select({
  ios: () => require("./IOSAppBar").default,
  default: () => require("./AppBar").default,
})();

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<CoffeeList />} />
        <Route path="/about" element={<Text>FNC</Text>} />
      </Routes>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
