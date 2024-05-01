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
        fetch('http://localhost:3000/posts')
            .then(response => {
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
    }, []);

    const handleDelete = (postId) => {
        // Aquí puedes añadir una llamada a la API para eliminar el post
        fetch(`http://localhost:3000/posts/${postId}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) throw new Error('Error al eliminar el post');
                alert('Post eliminado con éxito');
                // Filtrar el post eliminado del estado
                setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
            })
            .catch(error => alert('Error al eliminar el post: ' + error.message));
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
