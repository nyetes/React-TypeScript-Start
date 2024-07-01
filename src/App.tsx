import React from 'react'
import './App.css';
import ReactDom from 'react-dom';
import Blog from './pages/Blog';
import Home from './pages/Home'
import { Route } from 'react-router-dom';



const App: React.FC = () => {
  return (
  <div className ='container'>
    <Route path="/" Component={Home} />
    <Route path="/blog/:id" Component={Blog} />
    </div>
  );
};

export default App;
