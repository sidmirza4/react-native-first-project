import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  function addGoalHandler(text) {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        text: text,
      },
    ]);

    setIsAddModalOpen(false);
  }

  function removeGoalHandler(goalId) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setIsAddModalOpen(true)}
        />

        {/* INPUT AREA */}
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isAddModalOpen}
          onCancel={() => setIsAddModalOpen(false)}
        />

        {/* LIST TO SHOW GOALS */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            // key extractor is not needed because we are using the key property of the object
            keyExtractor={(item, index) => item.key}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={removeGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
