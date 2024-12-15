import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Footer/>
    </div>
  );
}

export default App;
