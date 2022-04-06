import React, { useState, useCallback } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./TodoAdd.scss";

const TodoAdd = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onAdd(value);
      setValue("");
    },
    [onAdd, value]
  );

  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input
        placeholder="추가할 할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoAdd;
