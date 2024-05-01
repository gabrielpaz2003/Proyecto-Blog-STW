// src/components/Card.jsx
import PropTypes from 'prop-types';
import './Card.css';
import defaultImage from '../assets/no-image.jpg';

function Card({ post, onEdit, onDelete }) {
    return (
        <div className='card'>
            <img src={post.image || defaultImage} alt={post.title} className='image' />
            <div className='card-content'>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <div className='navigation'>
                    <button onClick={() => onEdit(post.id)} className='buttonEdit'>Editar</button>
                    <button onClick={() => onDelete(post.id)} className='buttonDelete'>Eliminar</button>
                </div>
            </div>
            
        </div>
    );
}

Card.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        image: PropTypes.string
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Card;
