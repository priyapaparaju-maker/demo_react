import { useNavigate } from 'react-router-dom';
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';
import { useState } from 'react';


const Login = ()=>{

  const navigate= useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', password: '' });
  
  const handleClick=()=>{
    let isValid = true;
    // Validate Name
    if (!name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Name is required' }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, name: '' }));
    }

    // Validate Password
    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }

    if (isValid) {
      console.log('Successfully logged in');
      navigate('/pages/CRUD/ProductList');
    }
  };
    return(
        <div>
      <div style={{display: 'flex', padding: '1rem'}}>
       <label htmlFor="name">Name:</label> 
       <InputBox value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div style={{display: 'flex', padding: '1rem'}}>
        <label htmlFor="password">Password:</label> 
          <InputBox value={password} placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div style={{display: 'flex', padding: '1rem'}}>
        <Button name="Submit" handleClick={handleClick}/>
      </div>
      {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
        )

}
export default Login;
