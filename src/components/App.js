import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import Header from './common/Header';

function App() {
    function getPage() {
        const route = window.location.pathname;
        if (route === "/courses") return <CoursesPage />
        if (route === "/about") return <AboutPage />
        return <HomePage />
    }
    return (
        <div>
            <Header />
            {getPage()}
        </div>
        );
}

export default App;