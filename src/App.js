
import './index.css';
import {Routes, Route} from 'react-router-dom';
import Items from './components/Items';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={ <Home/> }/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/items" element={<Items />} />

    </Routes>
    </>
  
  );
}

export default App;
