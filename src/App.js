import { Divider } from '@mui/material';
import React from 'react';
import './App.css';
import Content from './components/Content';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Cover />
     <Divider />
     <Content />
    <Footer />
    </div>
  );
}

export default App;
