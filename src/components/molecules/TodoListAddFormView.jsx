import { Input, Box, Center } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import React, { useState } from "react";

export const TodoListAddFormView = (props) => {
  const { onClickAdd } = props;
  const [todoItem, setTodoItem] = useState("");

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  };

  const handleClick = () => {
    onClickAdd(todoItem);
    setTodoItem("");
  };

  return (
    <Center>
      <Box>
        <Input
          placeholder="Todoリストを入力してください"
          value={todoItem}
          onChange={handleChange}
          size="md"
          htmlSize={30}
          width="auto"
          mr={3}
        />
        <PrimaryButton onClick={handleClick}>追加</PrimaryButton>
      </Box>
    </Center>
  );
};
