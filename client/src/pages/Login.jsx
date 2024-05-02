// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import ParticlesBackground from '../components/ParticlesBackground';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        // Aquí iría la lógica para enviar las credenciales al servidor
        console.log("Login attempt with:", email, password);
        


    };

    const handleLoginButton = () => {
        navigate('/admin');
    }

    return (
        <>
            <ParticlesBackground/>
            <div className='body'>
                <div className="login-container">
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <div className="input-container">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className='input-container'>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label>Password</label>
                        </div>
                            
                        <button type="submit" onClick={handleLoginButton}>Login</button>
                    </form>
                </div>
            </div>
        </>
        
        
    );
}

export default Login;
