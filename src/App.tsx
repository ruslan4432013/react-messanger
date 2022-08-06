import React from 'react';
import './App.css';
import {Message} from "./components/Message/Message";

function App() {
  
  const message = "Hello, i'm in app"
  
  return (
    <div className="App">
        <Message message={message}/>
    </div>
  );
}

export default App;
