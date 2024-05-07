import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';  // Asegúrate de que la ruta al hook es correcta
import './PostForm.css';

const PostForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { loading, error, request } = useApi();  // Usando el hook useApi actualizado

    const handleSubmit = async (event) => {
        event.preventDefault();
        // No necesitas convertir el cuerpo aquí porque el hook ya lo maneja
        const result = await request('http://localhost:3000/posts', 'POST', { title, content });

        if (result) {
            alert('Post agregado correctamente');
            setTitle('');
            setContent('');
            navigate('/post');  // Redirección después de la creación exitosa
        } else {
            // Si result es null, entonces hubo un error manejado en el hook, no es necesario manejar aquí
        }
    };

    return (
        <form onSubmit={handleSubmit} className="formStyles">
            <h2>Crear Post</h2>
            {error && <p className="error">{error}</p>}
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
                {loading ? 'Agregando...' : 'Agregar'}
            </button>
        </form>
    );
};

export default PostForm;
