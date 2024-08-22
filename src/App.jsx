import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeListPage from './pages/RecipeListPage'; // Make sure this path is correct
import RecipePage from './pages/RecipePage'; // Make sure this path is correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<RecipeListPage />} />
                <Route path="/recipe/:label" element={<RecipePage />} />
            </Routes>
        </Router>
    );
};

export default App;
