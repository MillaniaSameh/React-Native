import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

export default function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  text: {
    textAlign: "center",
    marginBottom: 12,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
