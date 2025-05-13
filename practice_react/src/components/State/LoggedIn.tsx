import { useState } from "react"    



export const LoggedIn = () => {
    const[isLoggedIn, setisLoggedIn] = useState(false)
    const handleLogIn = () =>{
        setisLoggedIn(true)
    }
    const handleLogOut = () =>{
        setisLoggedIn(false)
    }
  return (
    <div>
      <button onClick = {handleLogIn}>Log In</button>
      <button onClick = {handleLogOut}>Log Out</button>
      <div>{isLoggedIn? "User is logged In": "User is looged out"}</div>    </div>
  )
}   