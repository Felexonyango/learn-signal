import type { Component } from 'solid-js';
import { createEffect, createSignal } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [first, setFirst] = createSignal("JSON");
  const [count, setCount] = createSignal(0)
const[data,setData]=createSignal([
  {
    name:"Test",
    email:"test@example.com",
  },
  {
    name:"data",
    email:"test@example.com",
  }
])
  const currentCount = count();
  const handleClick =()=>{
    setData([...data(), {name:"test1",email:"email@example.com"}])
  }

  return (
    <div class={styles.App}>
   <p> my name is :{first()}</p>
   <button onClick={handleClick}>Add Item</button>
   <ul>
        {data().map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>

  
   
    </div>
  );
};

export default App;
