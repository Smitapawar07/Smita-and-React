function App() {

  return <center class='todo-container'>Placeholder
    <h1>TODO APP</h1>
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="enter todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>


      <div class="row">
        <div class="col-6">
          Buy milk
           </div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">
          Add
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          Buy milk
           </div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">
          Add
          </button>
        </div>
      </div>
    </div>
  </center>
}
export default App
