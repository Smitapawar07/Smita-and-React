import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import TodoItem from "./Components/TodoItem"
function App() {

  return <center class='todo-container'>Placeholder
    <AppName/>
    <AddTodo/>
    <TodoItem/>
    <div class="container text-center">
      <div class="row">
        <div class="col-6">Go to College</div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">
          Delete
          </button>
        </div>
      </div>
    </div>
  </center>
}
export default App
