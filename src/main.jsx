import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import './index.css';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path ="/" element ={<Login/>}/>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />

            
        </Routes>
    </BrowserRouter>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
