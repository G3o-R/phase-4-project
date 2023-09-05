import React ,{useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider({children}){
    const [user, setUser] = useState(null)
    const [jobsData, setJobs] = useState([])

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
    

    return <Context.Provider value={{ user, setUser, jobsData, setJobs}}>{children}</Context.Provider>
}

export {Context, ContextProvider}