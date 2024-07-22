import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrMsg from "./components/ErrMsg";

function App() {
   
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrMsg />
      <FoodItems />
    </>
  );
}

export default App;
