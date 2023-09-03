import '../styles/App.scss';
import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Context } from './Context/Context';

import NavBar from './NavBar';
import Home from './Home';
import LoginForm from './LogInForm';
import SignupForm from './SignupForm';
import MyJobs from './MyJobs';
/* 
implement displaying errors for signing up with invalid data, X
logging in with invalid data X
not providing contact information when applying to a job X
and figure out why editing a job doesn't supply errors when contact info is invalid
*/


function App() {
  const {user, setUser, jobsData, setJobs} = useContext(Context)

  useEffect(()=>{
    fetch("/jobs")
    .then((res)=>res.json())
    .then(jobs=>setJobs(jobs))

    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
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
