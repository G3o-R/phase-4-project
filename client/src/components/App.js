import '../styles/App.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import LoginForm from './LogInForm';
import SignupForm from './SignupForm';
import MyJobs from './MyJobs';


function App() {
  const [jobsData, setJobs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch("/jobs")
    .then((res)=>res.json())
    .then(jobs=>setJobs(jobs))

    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => console.log(user))
      }
    })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home jobs={jobsData} user={user}/>} />
        <Route path="my-jobs" element={<MyJobs user={user}/>} />
        <Route path="/login" element={<LoginForm setUser={setUser}/>} />
        <Route path="/signup" element={<SignupForm setUser={setUser}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
