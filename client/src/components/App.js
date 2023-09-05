import '../styles/App.scss';
import { useContext} from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Context } from './Context/Context';

import NavBar from './NavBar';
import Home from '../Pages/Home';
import LoginForm from '../Pages/LogInForm';
import SignupForm from '../Pages/SignupForm';
import MyJobs from '../Pages/MyJobs';
import CreateJob from '../Pages/CreateJob';


function App() {
  const {user, setUser, jobsData} = useContext(Context)



  return (
    <div className="App">
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home jobs={jobsData} user={user}/>} />
        <Route path="/my-jobs" element={<MyJobs user={user}/>} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/login" element={<LoginForm setUser={setUser}/>} />
        <Route path="/signup" element={<SignupForm setUser={setUser}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
