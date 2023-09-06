import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";
import { Route, Routes } from "react-router-native";
import CoffeeList from "./CoffeeList";
import AppBar from "./AppBar";
import Login from "../pages/Login";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<CoffeeList />} />
        <Route path="/login" element={<Login />} />
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
