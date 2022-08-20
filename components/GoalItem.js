import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // for iOS
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    marginVertical: 10,
    backgroundColor: "#5e0acc",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
  },

  goalText: {
    color: "white",
    padding: 10,
  },

  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
