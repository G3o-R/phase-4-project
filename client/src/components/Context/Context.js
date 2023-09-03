import React ,{useState} from "react";

const Context = React.createContext()

function ContextProvider({children}){
    const [user, setUser] = useState(null)
    const [jobsData, setJobs] = useState([])
    

    return <Context.Provider value={{ user, setUser, jobsData, setJobs}}>{children}</Context.Provider>
}

export {Context, ContextProvider}