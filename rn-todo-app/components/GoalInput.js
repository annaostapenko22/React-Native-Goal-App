import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = props => {
  const [enteredGoal, setEnetredGoal] = useState("");

  const goalInputHandler = entredText => {
    setEnetredGoal(entredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnetredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.input}>
        <TextInput
          placeholder="Your goal"
          style={styles.inputContainer}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnWrapper}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={props.cancelHandler} />
          </View>
          <View style={styles.btn}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    width: "80%",
    marginBottom: 10
  },
  input: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between"
  },
  btn: {
    width: "40%"
  }
});

export default GoalInput;
