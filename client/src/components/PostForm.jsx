import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';  // Asegúrate de que la ruta al hook es correcta
import useApi from '../hooks/useApi';
import './PostForm.css';

const PostForm = () => {
    const navigate = useNavigate();
    const { loading, error, request } = useApi();
    const { values, handleChange, handleSubmit } = useForm({ title: '', content: '' });

    const submitForm = async () => {
        const result = await request('http://localhost:3000/posts', 'POST', values);

        if (result) {
            alert('Post agregado correctamente');
            navigate('/post');  // Redirección después de la creación exitosa
        }
    };

    return (
        <form onSubmit={handleSubmit(submitForm)} className="formStyles">
            <h2>Crear Post</h2>
            {error && <p className="error">{error}</p>}
            <label className="labelStyles">Título:</label>
            <input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                required
                className="inputStyles"
            />
            <label className="labelStyles">Contenido:</label>
            <textarea
                name="content"
                value={values.content}
                onChange={handleChange}
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
