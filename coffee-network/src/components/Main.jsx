import { SafeAreaView, StyleSheet } from "react-native";
import CoffeeList from "./CoffeeList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <CoffeeList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
