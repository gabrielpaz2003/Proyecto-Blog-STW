// src/components/NavBar.jsx
import logo from '../assets/logo-navbar.png'; // Asegúrate de tener esta imagen en tu carpeta de assets
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    
    return (
        <nav className='navbar'>

            <img src={logo} alt="logo" className='logo' />
            <Link to="/admin" className="nav-link" >Home</Link>
            <Link to="/post" className="nav-link">Posts</Link>
            <Link to="/post/add" className="nav-link">Nuevo Post</Link>
        </nav>
    );
};

export default NavBar;
