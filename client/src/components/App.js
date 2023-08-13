import '../styles/App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

import NavBar from './NavBar';


function App() {
  useEffect(()=>{
    fetch("/jobs")
    .then((res)=>res.json())
    .then(jobs=>console.log(jobs))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
