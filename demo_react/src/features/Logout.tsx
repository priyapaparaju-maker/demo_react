import { useNavigate } from 'react-router-dom';
export const Logout = () => {
    const navigate= useNavigate();
    const handleLogOut = () => {
        navigate('/features/auth/Login');
        console.log("Logged out successfully");
    };
    
    return (
        <div>
        <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
}