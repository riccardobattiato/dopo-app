import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Plus } from "~/lib/icons/Plus";
import { Input } from "~/components/ui/input";
import { useState } from "react";

type NewTaskProps = {
  onAdd: () => void;
};

export default function NewTask({ onAdd }: NewTaskProps) {
  const [task, setTask] = useState("");

  const onChangeText = (text: string) => {
    setTask(text);
  };

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-1">
        <Input
          placeholder="Type something..."
          value={task}
          onChangeText={onChangeText}
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          className="bg-transparent border-transparent"
        />
      </View>
      <View className="shrink-0">
        <Button
          size="icon"
          variant="outline"
          className="shadow shadow-foreground/5"
          onPress={onAdd}
        >
          <Plus className="text-foreground" size={23} strokeWidth={1.25} />
        </Button>
      </View>
    </View>
  );
}
