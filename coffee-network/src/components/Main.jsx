import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Route, Routes } from "react-router-native";

import CoffeeList from "./CoffeeList";
import AppBar from "./AppBar";

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
