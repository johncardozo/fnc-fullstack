import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";

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
            <TextInput
              placeholder="product"
              value={values.product}
              onChangeText={handleChange("product")}
            />
            <TextInput
              placeholder="brand"
              value={values.brand}
              onChangeText={handleChange("brand")}
            />
            <TextInput
              placeholder="country"
              value={values.country}
              onChangeText={handleChange("country")}
            />
            <TextInput
              placeholder="body"
              value={values.body}
              onChangeText={handleChange("body")}
            />
            <TextInput
              placeholder="acidity"
              value={values.acidity}
              onChangeText={handleChange("acidity")}
            />
            <TextInput
              placeholder="notes"
              value={values.notes}
              onChangeText={handleChange("notes")}
            />
            <TextInput
              placeholder="stars"
              value={values.stars}
              onChangeText={handleChange("stars")}
            />
            <TextInput
              placeholder="image"
              value={values.img}
              onChangeText={handleChange("img")}
            />
            <Button onPress={handleSubmit} title="Add coffee" />
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
});

export default AddCoffee;
