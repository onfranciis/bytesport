import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Sports from './components/sports/Sports';
import Tennis from './components/sports/tennis/Tennis';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/sports/tennis' element={<Tennis/>}/>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
