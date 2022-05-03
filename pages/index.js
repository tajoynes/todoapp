import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Container, Form, Header } from "semantic-ui-react";

export default function Home() {
  //State variables
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  //Helper functions
  function addItem() {
    if (!todo) {
      alert("Cannot be blank");
      return;
    }
    if (/^[a-zA-Z ]*$/.test(todo)) {
      const todos = {
        id: Math.floor(Math.random() * 10000),
        value: todo,
      };

      setTodoList((todoList) => [...todoList, todos]);
      setTodo("");
    } else {
      alert("Invalid entry, try again");
      return;
    }
  }
  function deleteItem(id) {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  }

  return (
    <Container
      fluid
      textAlign="center"
      style={{ backgroundColor: "#EBF2FA", height: "100vh", width: "auto" }}
    >
      <Header
        size="huge"
        style={{ color: "#05668D", paddingTop: 50, paddingBottom: 25 }}
      >
        Simple To Do app
      </Header>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ backgroundColor: "#05668D", padding: 15 }}>
          <Form>
            <Form.Field>
              <Header size="medium">
                <label style={{ color: "#679436", fontStyle: "italic" }}>
                  Add Todo Task
                </label>
              </Header>
              <input
                type="text"
                style={{ borderColor: "#A5BE00", borderWidth: 2 }}
                placeholder="Add to to-do list"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
              />
            </Form.Field>
            <Button
              type="submit"
              onClick={addItem}
              style={{
                backgroundColor: "#427AA1",
                color: "#A5BE00",
              }}
            >
              Add Task
            </Button>
          </Form>
        </Card>
        <div
          style={{
            width: "50%",

            borderRadius: "10px",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            {todoList.map((todos) => {
              return (
                <li
                  key={todos.id}
                  style={{
                    backgroundColor: "#679436",
                    borderRadius: 10,
                    color: "#EBF2FA",
                    padding: 10,
                  }}
                >
                  {todos.value}
                  <Button
                    style={{
                      marginLeft: 20,
                      backgroundColor: "red",
                      borderRadius: 10,
                    }}
                    onClick={() => deleteItem(todos.id)}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Container>
  );
}
