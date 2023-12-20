import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // paddingRight: 8,
    marginRight: 24,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 2,
    // borderColor: "red",
  },
  pressed: {
    opacity: 0.75,
  },
});
