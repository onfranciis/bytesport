import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Sports from './components/sports/Sports';
import Tennis from './components/sports/tennis/Tennis';
import NotFound from './components/NotFound/NotFound';
import Soccer from './components/sports/soccer/Soccer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/sports/tennis' element={<Tennis/>}/>
        <Route path='/sports/soccer' element={<Soccer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
