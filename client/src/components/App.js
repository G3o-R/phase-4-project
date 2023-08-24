import '../styles/App.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import LoginForm from './LogInForm';
import SignupForm from './SignupForm';


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
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
