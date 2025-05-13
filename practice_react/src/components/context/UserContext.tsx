import { useState, createContext } from "react";

export type AuthUser={
    name: string, 
    email: string
}

export const UserContext = createContext<UserContextType | null>({} as UserContextType)

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderProps ={
    children: React.ReactNode
}

export const UserContextProvider = ({children}: UserContextProviderProps) =>{
const[user, setUser] = useState<AuthUser | null>(null)
return(<UserContext.Provider value={{user, setUser}}>
    {children}
</UserContext.Provider>)
}