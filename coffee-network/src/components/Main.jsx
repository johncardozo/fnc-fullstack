import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>The Coffee Network</Text>
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
