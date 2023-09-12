import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Formik, useField } from "formik";
import { useNavigate } from "react-router-native";

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
  const navigate = useNavigate();

  // Función que crea el café en el backend
  const createCoffee = async (values) => {
    const data = {
      ...values,
      stars: parseInt(values.stars),
    };
    const url = process.env.EXPO_PUBLIC_API_URL;
    try {
      // Guarda los datos en Backend
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // Navega el inicio
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={createCoffee}>
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
