import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home =() =>{
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);


	function addItem() {
	const item= {
		id: Math.floor(Math.random() * 1000),
		value: newItem
	};
	setItems(oldList => [...oldList, item]);
	setNewItem("");
 }
 function deleteItem(id){
	const newArray = items.filter(item => item.id !==id);
	setItems(newArray);

 }
 


  return(
	<div className="App">
		<h1>Lista de tareas</h1>
		<input type="text" placeholder='Add an item...' value={newItem}
		onChange={e => setNewItem(e.target.value)}
		/>
		<button onClick={() => addItem()}>Crear</button>
		<ul>
			{items.map(item => {
				return(
					<li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>Eliminar</button></li>
				)
			})}
		</ul>
	</div>
  );
		};




export default Home;
