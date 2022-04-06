import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate.js";
import TodoAdd from "./components/TodoAdd.js";
import TodoList from "./components/TodoList.js";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "React 학습",
      checked: true,
      star: false,
    },
    {
      id: 2,
      text: "React Hooks 학습",
      checked: true,
      star: false,
    },
    {
      id: 3,
      text: "javascript ES6 학습",
      checked: false,
      star: true,
    },
  ]);

  const nextId = useRef(4);

  const onAdd = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  const onCheck = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id)); // 클릭되지 않은 나머지만 추출하여 새로운 배열 생성
    },
    [todos]
  );

  const onImportant = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, star: !todo.star } : todo)
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoAdd onAdd={onAdd} />
      <TodoList 
        todos={todos} 
        onRemove={onRemove} 
        onCheck={onCheck} 
        onImportant={onImportant} 
      />
    </TodoTemplate>
  );
};

export default App;