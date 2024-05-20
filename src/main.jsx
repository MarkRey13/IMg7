import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './index.css';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
