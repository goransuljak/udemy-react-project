import './App.css';
import Navbar from './components/layout/Navbar';
import { Component } from 'react';

class App extends Component {
    render() {    
    return (
      <nav className="navbar bg-primary">
      <Navbar />
      </nav>
    );
  } 
}

export default App;
