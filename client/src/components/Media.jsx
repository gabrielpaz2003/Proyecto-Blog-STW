// src/components/Media.jsx
import image from '../assets/sci-fi.jpg';

const Media = () => {
    return (
        <main className='contenedor'>
            <img src={image} alt="video" width="100%" height="100%" />
            <div className='banner'>
                <h2>Bienvenido al Blog de Ciencia Ficcion</h2>
            </div>
        </main>
    );
};

export default Media;
