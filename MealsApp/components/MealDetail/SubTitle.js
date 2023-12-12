import { View, Text, StyleSheet } from "react-native";

export default function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#97a5dc",
    borderBottomWidth: 1,
  },
  subTitle: {
    color: "#97a5dc",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
