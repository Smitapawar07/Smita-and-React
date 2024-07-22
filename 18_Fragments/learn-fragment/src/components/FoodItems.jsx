import Item from "./Item";
const FoodItems = ()=>{
  let foodItems =['roti','salad','vegies','milk','dal']
      return(
<ul className="list-group">
      {foodItems.map(item=>(
      <Item key={item} foodItem={item}></Item>
             ) )}
      </ul>
);
};
export default FoodItems;