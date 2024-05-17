import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('./pages/Login'));
const Admin = React.lazy(() => import('./pages/Admin'));
const Post = React.lazy(() => import('./pages/Post'));
const AddPost = React.lazy(() => import('./pages/AddPost'));
const EditPost = React.lazy(() => import('./pages/EditPost'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/post/add" element={<AddPost />} />
                    <Route path="/post/edit/:postId" element={<EditPost />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
