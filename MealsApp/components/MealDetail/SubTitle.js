import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

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
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 1,
  },
  subTitle: {
    color: Colors.primary500,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
