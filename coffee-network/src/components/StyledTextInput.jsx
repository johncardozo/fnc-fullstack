import { StyleSheet, TextInput } from "react-native";

const StyledTextInput = ({ style = {}, ...props }) => {
  const inputStyle = {
    ...styles.textInput,
    ...style,
  };

  return <TextInput style={inputStyle} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#888888",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default StyledTextInput;
