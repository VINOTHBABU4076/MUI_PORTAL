import {createContext,useState,useContext} from "react"

const Authcontext =createContext()

export const Authprovider =({children}) =>{
    const[user,setuser]=useState(null)
    const login =(user) =>{
        setuser(user)
    } 
    const logout =() =>{
        setuser(null)
    } 
    return <Authcontext.Provider value={{user,login,logout}}>{children}</Authcontext.Provider>
}
export const useAuth =() =>{
    return useContext(Authcontext)
}