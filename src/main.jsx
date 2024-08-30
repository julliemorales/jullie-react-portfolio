import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import Projects from './pages/Projects.jsx';
import Home from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
                <Route
                    path="*"
                    element={<ErrorPage />}
                />
            </Routes>
        </Router>
    </StrictMode>
);
