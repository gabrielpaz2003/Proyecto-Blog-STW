import NavBar from '../components/NavBar';
import Media from '../components/Media';

function Admin() {
    const adminStyle = {
        backgroundColor: 'rgba(30, 30, 30, 1)', // Ajusta los estilos según tus necesidades
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'block',
        position: 'relative',
        margin: 0,
        padding: 0,
    };

    return (
        <div style={adminStyle}>
            <NavBar />
            <Media />
        </div>
    );
}

export default Admin;
