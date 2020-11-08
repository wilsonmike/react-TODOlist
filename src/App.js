import React, { useState } from "react";
import "./App.css";
// import comp
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //functions
  const arrowHandler = () => {
    switch (status) {
      case `completed`:
        setFilteredTodos(todos.filter((todo) => todos.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todos) => todos.completed === false));
    }
  };
  return (
    <div className="App">
      <header>
        <h3>
          <i className="fas fa-bullseye"></i> task[ez]
        </h3>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

//52:11
