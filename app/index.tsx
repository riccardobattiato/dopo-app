import * as React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import NewTask from "~/components/NewTask";

export default function Screen() {
  function addNewTask() {
    console.log("Hello");
  }

  return (
    <View className="flex-1 p-6 bg-secondary/30">
      <Text className="text-lg">Now</Text>
      <NewTask onAdd={addNewTask} />
    </View>
  );
}
