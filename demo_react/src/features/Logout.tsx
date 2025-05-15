import { useNavigate } from 'react-router-dom';
import { Link } from '../components/Link';
export const Logout = () => {
    const navigate= useNavigate();
   /* const handleLogOut = () => {
        navigate('/features/auth/Login');
        console.log("Logged out successfully");
    };*/
    
    return (
        <div>
        <Link name="Log Out" href="/features/auth/Login"/>
        </div>
    );
}