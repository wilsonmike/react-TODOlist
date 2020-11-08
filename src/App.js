import React, { useState, useEffect } from "react";
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
  //run once
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save local

  const saveLocalTodos = () => {
    localStorage.setItem(`todos`, JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem(`todos`, JSON.stringify([]));
    } else {
      let start = JSON.parse(localStorage.getItem(`todos`));
      setTodos(start);
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
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;

//52:11
