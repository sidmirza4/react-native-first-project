import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [text, setText] = useState("");

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(text);
    setText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goal"
          value={text}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 20,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  button: {
    width: 100,
    marginHorizontal: 10,
  },
});

export default GoalInput;
