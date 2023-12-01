import React, { useState } from 'react';
import {Navbar} from './components/Navbar';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {List} from './components/List';
import {Button} from './components/Button';
import {Footer} from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TODOS_KEY = 'todos';

const getTodos = (TODOS_KEY = 'todos') => {
  const todosString = localStorage.getItem(TODOS_KEY);
  if (!todosString) {
    return [];
  }
  return JSON.parse(todosString);
};

const addTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  const todosString = JSON.stringify(todos);
  localStorage.setItem(TODOS_KEY, todosString);
};

const updateTodo = (updatedTodo) => {
  // const todos = getTodos();
  // const updatedTodos = todos.map((todo) => {
  //   if (todo.id === id) {
  //     return updatedTodo;
  //   }
  //   return todo;
  // });
  const todosString = JSON.stringify(updatedTodo);
  localStorage.setItem(TODOS_KEY, todosString);
  
};

function App() {
  const notify = () => toast.success("Done sucessfuly!");
  const [tasks, setTasks] = useState(getTodos());

  const handleAddTask = (data) => {
    // generate a random id
    const newId = Math.floor(Math.random() * 10000) + 1;
    addTodo({ id: newId, name: data, completed: false });
    setTasks([...tasks, { id: newId, name: data, completed: false }]);
    notify();
  };

  const handleEditTask = (id, newName, completed=false) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName, completed: completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    updateTodo(updatedTasks);
  };

  const handleRemoveTask = (id) => { 
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
    updateTodo(remainingTasks);
    notify();
  };

  const handleRemoveCompleted = () => {
    const remainingTasks = tasks.filter((task) => !task.completed);
    setTasks(remainingTasks);
    updateTodo(remainingTasks);
    notify();
  };


  return (
    <div className="App bg-slate-100">
      <Navbar />
      <div className="flex flex-col items-center w-[350px] mx-auto bg-slate-50 mt-2 justify-start h-screen">
        <Header />
        <Input addNew={handleAddTask} />
        <List 
        tasks={tasks} 
        editTask={handleEditTask}  
        removeTodo={handleRemoveTask}
        />
        <Button removeAllCompleted={handleRemoveCompleted} />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;