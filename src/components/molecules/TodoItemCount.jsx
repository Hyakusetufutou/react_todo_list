import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

export const TodoItemCount = (props) => {
  const { task, completeTask, uncompleteTask } = props;
  return (
    <Box>
      <Center>
        <Text fontSize={18} mb={4}>
          全てのタスク：{task} 完了済み：{completeTask} 未完了：{uncompleteTask}
        </Text>
      </Center>
    </Box>
  );
};
