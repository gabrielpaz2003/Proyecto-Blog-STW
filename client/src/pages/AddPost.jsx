import PostForm from '../components/PostForm';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './AddPost.css';
import ParticlesBackground from '../components/ParticlesBackground';

function AddPost() {
    return (   
        <div className="add-post-container">
            <ParticlesBackground/>
            <NavBar />
            <div className='content-form'>
                <PostForm />
            </div>
            <Footer />
        </div> 
    );
}

export default AddPost;