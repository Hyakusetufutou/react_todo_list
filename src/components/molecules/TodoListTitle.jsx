import { Text } from "@chakra-ui/react";
import React from "react";

export const TodoListTitle = React.memo(() => {
  return (
    <Text fontSize={27} mb={3} mt={8} ml={12}>
      ☑️Todo List
    </Text>
  );
});
