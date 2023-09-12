import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Formik, useField } from "formik";

import theme from "../theme";
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
  product: "",
  brand: "",
  country: "",
  body: "",
  acidity: "",
  notes: "",
  stars: "",
  img: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <StyledTextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

const AddCoffee = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="product" name="product" />
            <FormikInputValue placeholder="brand" name="brand" />
            <FormikInputValue placeholder="country" name="country" />
            <FormikInputValue placeholder="body" name="body" />
            <FormikInputValue placeholder="acidity" name="acidity" />
            <FormikInputValue placeholder="notes" name="notes" />
            <FormikInputValue placeholder="stars" name="stars" />
            <FormikInputValue placeholder="image" name="img" />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.button.text}>ADD COFFEE</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 15,
  },
  button: {
    backgroundColor: theme.colors.appBarBackground,
    padding: 8,
    borderRadius: 5,
    text: {
      color: "#fff",
      textAlign: "center",
    },
  },
});

export default AddCoffee;
