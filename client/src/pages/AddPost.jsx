import PostForm from '../components/PostForm';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './AddPost.css';

function AddPost() {
    return (
        <div>
            <NavBar />
            <div className='content-form'>
                <h2>Crear Post</h2>
                <PostForm />
            </div>
            <Footer />
        </div>
    );
}

export default AddPost;