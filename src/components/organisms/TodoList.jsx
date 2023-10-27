import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { TodoItemView } from "../molecules/TodoItemView";
import { TodoListAddFormView } from "../molecules/TodoListAddFormView";
import { TodoListEditFormView } from "../molecules/TodoListEditFormView";
import { TodoItemCount } from "../molecules/TodoItemCount";
import { TodoListTitle } from "../molecules/TodoListTitle";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = (todoItem) => {
    if (todoItem === "") {
      return;
    }
    setTodoList([
      ...todoList,
      { title: todoItem, completed: false, isEdit: false },
    ]);
  };

  const deleteTodoItem = (id) => {
    if (!window.confirm("本当に削除してもよろしいですか？")) {
      return;
    }
    const newTodoList = todoList.filter((todoItem, index) => {
      return index !== id;
    });

    setTodoList(newTodoList);
  };

  const updateTodoItem = ({ id, title, completed, isEdit }) => {
    const newTodoList = todoList.map((todoItem, index) => {
      if (index === id) {
        return { title: title, completed: completed, isEdit: isEdit };
      }
      return todoItem;
    });
    setTodoList(newTodoList);
  };

  const getTodoItemCount = () => {
    return todoList.length;
  };

  const getTodoCompleteItemCount = () => {
    const completeItem = todoList.filter((todoItem) => {
      return todoItem.completed === true;
    });

    return completeItem.length;
  };

  const getTodoUncompleteItemCount = () => {
    const uncompleteItem = todoList.filter((todoItem) => {
      return todoItem.completed === false;
    });

    return uncompleteItem.length;
  };

  return (
    <Box>
      <TodoListAddFormView onClickAdd={addTodoItem} />
      <TodoListTitle />
      <TodoItemCount
        task={getTodoItemCount()}
        completeTask={getTodoCompleteItemCount()}
        uncompleteTask={getTodoUncompleteItemCount()}
      />
      <Box>
        {todoList.map((todoItem, id) =>
          todoItem.isEdit ? (
            <TodoListEditFormView
              key={id}
              id={id}
              todoItem={todoItem}
              updateTodoItem={updateTodoItem}
            />
          ) : (
            <TodoItemView
              key={id}
              id={id}
              todoItem={todoItem}
              updateTodoItem={updateTodoItem}
              deleteTodoItem={deleteTodoItem}
            />
          )
        )}
      </Box>
    </Box>
  );
};
