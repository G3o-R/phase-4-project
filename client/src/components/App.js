import '../styles/App.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';


function App() {
  const [jobsData, setJobs] = useState([])

  useEffect(()=>{
    fetch("/jobs")
    .then((res)=>res.json())
    .then(jobs=>setJobs(jobs))
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home jobs={jobsData}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
