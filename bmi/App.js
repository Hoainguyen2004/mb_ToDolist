import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const clearInput = () => {
  setWeight("");
  setHeight("");
  setBMI(0);
  setClassification("");
};

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(0);
  const [classification, setClassification] = useState("");

  const computeBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmi = weightInKg / (heightInM * heightInM);
    setBMI(bmi);

    if (bmi < 18.5) {
      setClassification("Under Weight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setClassification("Normal Weight");
    } else if (bmi >= 25 && bmi <= 32) {
      setClassification("Over Weight");
    } else {
      setClassification("Obese");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Kg"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Cm"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={computeBMI}>
        <Text style={styles.buttonText}>Compute</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearInput}>
        <Text style={styles.buttonText}>Xóa</Text>
      </TouchableOpacity>
      <Text style={styles.result}>BMI: {BMI.toFixed(2)}</Text>
      <Text style={styles.classification}>Classification: {classification}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ee5ee",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#eec591",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#cdb79e",
    color: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  classification: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BMICalculator;
