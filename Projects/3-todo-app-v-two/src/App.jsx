import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./App.css";
import TodoItems from "./Components/TodoItems";
function App() {

  const todoItems = [{
    name: 'buy milk',
    dueDate: '4/10/2024',
  },
  {
    name: 'Go To College.',
    dueDate: '4/10/2024',
  },
  ];
  return <center className='todo-container'>
    <AppName />
    <AddTodo />
    <TodoItems todoItems={todoItems}></TodoItems>
    

  </center>
}
export default App
