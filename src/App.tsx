import type { Component } from 'solid-js';
import {createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [first, setFirst] = createSignal("JSON");
const[data,setData]=createSignal([
  {
    id:'1',
    name:"Test",
    email:"test@example.com",
  },
  {
    id:'2',
    name:"data",
    email:"test@example.com",
  }
])
 
  const handleClick =()=>{
    setData([...data(), {id:"3", name:"test1",email:"email@example.com"}])
  }
  const handleDelete =(id:string)=>{
     setData(data().filter(x=>x.id === id))
 
  }

  return (
    <div class={styles.App}>
   <p> my name is :{first()}</p>
   <button onClick={handleClick}>Add Item</button>
   <ul>
        {data().map((item) => (
          <div>
            <li>{item.name}</li>
            <button onclick={()=>handleDelete(item.id)}>Delete</button>
            </div>
          ))}

         
      </ul>

 
   
    </div>
  );
};

export default App;
