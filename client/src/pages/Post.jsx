// src/pages/PostPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Post.css';

function PostPage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('https://proyecto-blog-stw.onrender.com/posts', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            handleAuthErrors(response, navigate); // Manejar errores antes de procesar la respuesta
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            setPosts(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, [navigate]);

    const handleDelete = (postId) => {
        const token = localStorage.getItem('token');
        fetch(`https://proyecto-blog-stw.onrender.com/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            handleAuthErrors(response, navigate); // Manejar errores de autenticación
            if (!response.ok) throw new Error('Error al eliminar el post');
            alert('Post eliminado con éxito');
            setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
        })
        .catch(error => alert('Error al eliminar el post: ' + error.message));
    };

    const handleAuthErrors = (response, navigate) => {
        if (response.status === 401 || response.status === 403) { // 401 Unauthorized o 403 Forbidden
            localStorage.removeItem('token'); // Limpiar el token expirado o inválido
            navigate('/login'); // Redirigir al usuario a la página de login
            throw new Error('Session expired or invalid. Please log in again.');
        }
    };

    const handleEdit = (postId) => {
        // Aquí puedes redirigir al usuario a un formulario de edición
        // Por ejemplo, usando react-router-dom's navigate
        // 
        navigate(`/post/edit/${postId}`);
    };
    

    if (loading) return <div>Loading...</div>;

    if (error) return(
    <div>Error: {error}</div>
    ) 
    if (posts.length === 0) return (
    <div>
        <NavBar />
        <div className='no-post'>
            <h2>No hay posts disponibles</h2>
        </div>
        <Footer />
    </div>
    )

    return (
        <div>
            <NavBar />
            <div className='content-post'>
                
                {posts.map(post => (
                    <Card key={post.id} post={post} onEdit={handleEdit} onDelete={handleDelete} />
                ))}
            </div>
            
            <Footer />
        </div>
    );
}

export default PostPage;
