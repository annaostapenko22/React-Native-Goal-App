import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInpurt from "./components/GoalInput";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
const [isAddMode, setIsAddMode]= useState(false)
  const addGoalHandler = goalTitle => {
    if (goalTitle){
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    }
  };

  const deleteGoalHandler = id => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(elem => elem.id !== id);
    });
  };

  const cancelHandler = ()=> {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} cancelHandler={cancelHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
