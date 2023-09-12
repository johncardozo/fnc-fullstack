import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";

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

const AddCoffee = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <StyledTextInput
              placeholder="product"
              value={values.product}
              onChangeText={handleChange("product")}
            />
            <StyledTextInput
              placeholder="brand"
              value={values.brand}
              onChangeText={handleChange("brand")}
            />
            <StyledTextInput
              placeholder="country"
              value={values.country}
              onChangeText={handleChange("country")}
            />
            <StyledTextInput
              placeholder="body"
              value={values.body}
              onChangeText={handleChange("body")}
            />
            <StyledTextInput
              placeholder="acidity"
              value={values.acidity}
              onChangeText={handleChange("acidity")}
            />
            <StyledTextInput
              placeholder="notes"
              value={values.notes}
              onChangeText={handleChange("notes")}
            />
            <StyledTextInput
              placeholder="stars"
              value={values.stars}
              onChangeText={handleChange("stars")}
            />
            <StyledTextInput
              placeholder="image"
              value={values.img}
              onChangeText={handleChange("img")}
            />
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
