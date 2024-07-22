import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let foodItems =['roti','salad','vegies','milk','dal']
  return (
    <>
    
      <div>Healthy Food</div>
      <ul className="list-group">
      {foodItems.map(item=>
      <li key={item} class="list-group-item">
        { item}</li>
        )}
        
      </ul>
    </>
  );
}

export default App
