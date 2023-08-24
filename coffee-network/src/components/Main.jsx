import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CoffeeList from "./CoffeeList";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CoffeeList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Main;
