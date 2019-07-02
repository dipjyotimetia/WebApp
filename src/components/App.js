import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import Header from './common/Header';
import { Route } from 'react-router-dom';

function App() {

    return (
        <div>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/about" component={AboutPage} />
        </div>
    );
}

export default App;