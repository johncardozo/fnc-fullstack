import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";
import { Route, Routes } from "react-router-native";
import CoffeeList from "./CoffeeList";
import AppBar from "./AppBar";
import AddCoffee from "../pages/AddCoffee";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<CoffeeList />} />
        <Route path="/add" element={<AddCoffee />} />
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
