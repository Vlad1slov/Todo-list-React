import { useState } from "react";
import "./App.css";
import PetInfo from "./components/PetInfo";
import RandomNumber from "./components/RandomNumbar";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Persons from "./components/Persons";
import ResetButton from "./components/ResetButton";
import Card from "./components/Card";
import Login from "./components/Login";
import Wrapper from "./components/Wrapper";
import Fetching from "./components/Fetching";
import Posts from "./components/Posts";
import InfoComponent from "./components/InfoComponent";
import Todo from "./components/Todos/Todo";
import TodoForm from "./components/Todos/TodoForm";
import TodoLists from "./components/Todos/TodoList";
import AppTodo from "./components/AppTodo";

function App() {
    return (
        <div className="App">
            <AppTodo />
        </div>
    );
}

export default App;
