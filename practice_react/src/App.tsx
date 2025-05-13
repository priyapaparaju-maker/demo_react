import React from 'react';
import logo from './logo.svg';
import {Greet} from './components/Greet';
import Person from './components/Person';
import {PersonList} from './components/PersonList';
import {Status} from './components/Status';
import {Heading} from './components/Heading'
import {Oscar} from './components/Oscar';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {Container} from './components/Container';
import {LoggedIn} from './components/State/LoggedIn';
//import {User} from './components/State/User';
import {Counter} from './components/Counter';
import {ThemeContextProvider} from './components/context/ThemeContext'; 
import { Box } from './components/context/Box';

import './App.css';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { UseEffectPrac } from './components/useEffectPrac';

function App() {
const personName = {
  firstName: "John",
  lastName: "Doe"
};

const namelist =[
  {
    firstName: "Jack",
    lastName: "Kent"
  },
  {
    firstName: "Bruce",
    lastName: "Smith"
  },
  {
    firstName: "Bob",
    lastName: "Johnson"
  }
]
  return (
    
    <div className="App">
     <Person name={personName} />
     <Greet name="Priya" count={10} isLoggedIn={true} />   
     <PersonList names = {namelist}></PersonList>
     <Status status="success"></Status>
     <Oscar>
      <Heading>Oscar goes to Leonardo Decaprio!</Heading>
     </Oscar>
     <Button handleClick={(event, id) => console.log("Button Clicked", event, id)}/>
     <Input value=''  />
     <Container styles={{border: '1px solid black', padding: '1rem'}}/>
     <LoggedIn/>
      {/* <User/> */}
        <div>
          <h2>Counter</h2>
        </div>
     <div> <Counter/></div>
      <div><ThemeContextProvider><Box />
      </ThemeContextProvider></div>

      <div>
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
      <div><UseEffectPrac /></div>
</div>
  );
}

export default App;
