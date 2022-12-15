import React, {useState, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {
  const [message, setMessage]=useState([]);
  useEffect(()=>{
    fetch("/api/demo-web")
        .then((response)=>{
          return response.json();
        })
        .then((data)=>{
            setMessage(data);
        });
  },[]);
  return (
    <div className="App">
      <Layout category='Home'/>
      {message}
    </div>
  );
}

export default App;
