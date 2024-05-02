import { useState } from 'react';
import PropTypes from 'prop-types';
import './EditPostForm.css';

const EditPostForm = ({ post, onSubmit }) => {
    const [title, setTitle] = useState(post.title);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState(post.content);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        onSubmit({
            title,
            content
        });
    };

    return (
        <form onSubmit={handleSubmit} className="formStyles">
            <h2>Editar Post</h2>
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
                {loading ? 'Upadate...' : 'Actualizar'}
            </button>
        </form>
    );
};

EditPostForm.propTypes = {
    post: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default EditPostForm;
