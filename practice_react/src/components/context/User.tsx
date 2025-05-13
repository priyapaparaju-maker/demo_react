import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
    const userContext = useContext(UserContext)
    
const handlelogin = () =>{
    if(userContext){
        userContext.setUser({name: "John", email: "john@gmail.com"})
    }
}
const handlelogout = () =>{
    if(userContext){
        userContext.setUser(null)
    }
}
 return (
    <div>
        <button onClick={handlelogin} >Login</button>
        <button onClick ={handlelogout}>Logout</button>
        
        <div>User Name is{userContext?.user?.name} Email is {userContext?.user?.email}</div>
    </div>
 )
}
