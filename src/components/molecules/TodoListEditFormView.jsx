import { useState } from "react";
import { Input, Box, Center } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const TodoListEditFormView = (props) => {
  const { id, todoItem, updateTodoItem } = props;
  const [editTitle, setEditTitle] = useState(todoItem.title);

  const handleChange = (event) => {
    setEditTitle(event.target.value);
  };

  return (
    <Center>
      <Box pb={2}>
        <Input
          value={editTitle}
          onChange={handleChange}
          size="md"
          htmlSize={30}
          width="auto"
          mr={3}
        />
        <PrimaryButton
          onClick={() =>
            updateTodoItem({
              id: id,
              title: editTitle,
              completed: todoItem.completed,
              isEdit: !todoItem.isEdit,
            })
          }
        >
          保存
        </PrimaryButton>
      </Box>
    </Center>
  );
};
