import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from '../Wrapper';
import ItemEdit from '../ItemEdit';
import './app.css';

const App = () => (
  <div id="to-do-list">
    <Router>
      <Routes>
        <Route path="/" exact element={<Wrapper />} />
        <Route path="/:id" exact element={<ItemEdit />} />
      </Routes>
    </Router>
  </div>
);

export default App;
