import type { Component } from 'solid-js';
import { createEffect, createSignal } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");
  
  createEffect(() => console.log(`${first()} ${last()}`));
  return (
    <div class={styles.App}>
   
    </div>
  );
};

export default App;
