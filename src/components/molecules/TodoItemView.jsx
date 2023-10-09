import {
  Box,
  Text,
  Checkbox,
  ButtonGroup,
  Flex,
  Center,
} from "@chakra-ui/react";

import { WarningButton } from "../atoms/button/WarningButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import React from "react";

export const TodoItemView = (props) => {
  const { id, todoItem, updateTodoItem, deleteTodoItem } = props;

  return (
    <Box pb={2}>
      <Center>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Checkbox
            size="lg"
            isChecked={todoItem.completed}
            onChange={(e) =>
              updateTodoItem({
                id: id,
                title: todoItem.title,
                completed: !todoItem.completed,
                isEdit: todoItem.isEdit,
              })
            }
          />
          <Box w={200}>
            <Text fontSize={22} p="2">
              {todoItem.title}
            </Text>
          </Box>
          <ButtonGroup>
            <PrimaryButton
              onClick={() =>
                updateTodoItem({
                  id: id,
                  title: todoItem.title,
                  completed: todoItem.completed,
                  isEdit: !todoItem.isEdit,
                })
              }
            >
              編集
            </PrimaryButton>
            <WarningButton onClick={() => deleteTodoItem(id)}>
              削除
            </WarningButton>
          </ButtonGroup>
        </Flex>
      </Center>
    </Box>
  );
};
