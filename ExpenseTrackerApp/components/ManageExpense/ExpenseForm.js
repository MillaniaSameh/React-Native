import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../ui/Button";
import { getFormattedISODate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

export default function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedISODate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      // Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add a new Expense</Text>
        <View style={styles.inputsRow}>
          <Input
            style={styles.rowInput}
            label="Amount"
            invalid={!inputs.amount.isValid}
            textInfoConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangedHandler.bind(this, "amount"),
              value: inputs.amount.value,
            }}
          />
          <Input
            style={styles.rowInput}
            label="Date"
            invalid={!inputs.date.isValid}
            textInfoConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangedHandler.bind(this, "date"),
              value: inputs.date.value,
            }}
          />
        </View>
        <Input
          label="Description"
          invalid={!inputs.description.isValid}
          textInfoConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
        />
        {formIsInvalid && (
          <Text style={styles.errorText}>
            Invalid input values - Please check the entered data.
          </Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },

  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },

  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
