import image from '../assets/sci-fi.jpg';
import './Media.css';

const Media = () => {
    const handleClick = () => {
        window.location.href = 'https://github.com/gabrielpaz2003/Proyecto-Blog-STW.git';
    };

    return (
        <main className='contenedor'>
            <img src={image} alt="video" width="100%" height="100%" />
            <div className='banner'>
                <h1>Blog de Ciencia Ficción</h1>
                <p>
                    Bienvenido al Proyecto Blog STW, una plataforma dinámica donde puedes explorar, crear y gestionar tus propias entradas de blog 
                    en el apasionante mundo de la ciencia ficción. Este sistema se divide en dos partes principales: el frontend y el backend, trabajando 
                    en conjunto para ofrecer una experiencia de usuario fluida y funcional.
                    Aquí, puedes publicar nuevas historias, visualizar contribuciones de otros entusiastas, editar tus publicaciones para perfeccionarlas y 
                    eliminar aquellas que ya no deseas conservar. Diseñado para ser intuitivo y fácil de usar.
                </p>
                <p>
                    Puedes consultar toda la documentacion en el repositorio github, pulsa el botón para conocer mas.
                </p>
                <button onClick={handleClick}>GitHub</button>
            </div>
        </main>

    );
};

export default Media;
