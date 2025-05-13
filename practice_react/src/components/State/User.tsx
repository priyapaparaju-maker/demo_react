import { useState } from "react";   

type AuthUser = {
    name: string
    email: string

}

export const User = () => {
    const[user, setuser] = useState<AuthUser | null>(null)
    const handleLogIn = () =>{
       setuser(
        {
            name: "John Doe",
            email: "j.Doe@gmail.com"
        }
       )
    }
    const handleLogOut = () =>{
       setuser(null)
    }
  return (
    <div>
      <button onClick = {handleLogIn}>Log In</button>
      <button onClick = {handleLogOut}>Log Out</button>
      <div> "User name is {user?.name}"</div>  
      <div> "User email is {user?.email}"</div> 
        </div>
  )
    }