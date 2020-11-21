import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React, {useState} from 'react';

function WelcomeMessage({thename}){
  const [ count, setCount] = useState(0);
  return (
    <div>
      
      <Counter setCount={setCount}/>
      <p>Welcome! {thename} {count}</p>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage thename="Theresa"/>
        {/* <Counter/> */}
      </header>
    </div>
  );
}

export default App;
