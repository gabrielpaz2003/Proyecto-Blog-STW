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
        event.preventDefault();  // Evitar que el formulario se envíe de la manera tradicional
        try {
            const response = await fetch('http://localhost:3000/login', {  // Ajusta la URL según sea necesario
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password: password })
            });
            const data = await response.json();  // Asumiendo que el servidor responde con JSON
            if (response.ok) {
                localStorage.setItem('token', data.token);  // Guardar el token en local storage
                navigate('/admin');  // Redirigir al usuario a la página del admin
            } else {
                throw new Error(data.message || 'Failed to login');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert(error.message);  // Mostrar un mensaje de error al usuario
        }

    };

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
                            
                        <button type="submit" onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </>
        
        
    );
}

export default Login;
