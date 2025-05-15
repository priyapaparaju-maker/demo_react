import {createContext, useContext, useState} from 'react';

type UserContextType = {
username: string;
setUsername: (username: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider =({children}: {children: React.ReactNode}) => {
    const [username, setUsername] = useState<string>('');
    return(
      <UserContext.Provider value={{username, setUsername}}>{children}</UserContext.Provider>
    );
}

export const useUser = () =>{
    const context = useContext(UserContext);
    if(!context)
    {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}