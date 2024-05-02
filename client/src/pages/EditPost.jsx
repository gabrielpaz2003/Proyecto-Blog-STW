import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditPostForm from '../components/EditPostForm';
import ParticlesBackground from '../components/ParticlesBackground';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import './EditPost.css';

function EditPost() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`http://localhost:3000/posts/${postId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch the post');
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    const handleUpdatePost = async (updatedPost) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/posts/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost)
            });
            if (!response.ok) {
                throw new Error('Failed to update the post');
            }
            alert('Post actualizado correctamente');
        } catch (err) {
            alert(`Failed to update post: ${err.message}`);
        } finally {
            setLoading(false);
            navigate('/post');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return post ? (

            
            <div className="add-post-container">
                <ParticlesBackground/>
                <NavBar />
                <div className='content-form'>
                    <EditPostForm post={post} onSubmit={handleUpdatePost} />
                </div>
                <Footer />
            </div>
    ) : (
        <p>Post not found.</p>
    );
}

export default EditPost;


