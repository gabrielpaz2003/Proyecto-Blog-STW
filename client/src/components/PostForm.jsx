import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';  // Asegúrate de que la ruta al hook es correcta
import './PostForm.css';

const PostForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { loading, error, request } = useApi();  // Usando el hook useApi

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await request('http://localhost:3000/posts', 'POST', { title, content });

        if (result) {
            alert('Post agregado correctamente');
            setTitle('');
            setContent('');
            navigate('/post');  // Redirección después de la creación exitosa
        }
    };

    return (
        <form onSubmit={handleSubmit} className="formStyles">
            <h2>Crear Post</h2>
            {error && <p>{error}</p>}
            <label className="labelStyles">Título:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="inputStyles"
            />
            <label className="labelStyles">Contenido:</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="textAreaStyles"
            ></textarea>
            <button type="submit" disabled={loading} className="buttonStyles">
                {loading ? 'Adding...' : 'Agregar'}
            </button>
        </form>
    );
};

PostForm.propTypes = {
    onSubmit: PropTypes.func // Parece que esta propType no se utiliza, podrías considerar eliminarla
};

export default PostForm;
