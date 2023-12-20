import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

export default function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      children={({ pressed }) => (
        <>
          <Ionicons
            name={icon}
            size={18}
            color={pressed ? Colors.gray700 : Colors.primary500}
            style={styles.icon}
          />
          <Text style={[styles.text, pressed && styles.textPressed]}>
            {children}
          </Text>
        </>
      )}
    ></Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 6,
  },
  pressed: {
    backgroundColor: Colors.primary500,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
    fontSize: 16,
  },
  textPressed: {
    color: Colors.gray700,
  },
});
