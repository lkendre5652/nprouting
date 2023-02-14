import logo from './logo.svg';
import './App.css';
import { Home } from './common/Home';
import { Contact } from './common/Contact';
import {NavLink,Routes,Route } from 'react-router-dom';

function App() {
 return(<>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />     
    </Routes>
 </>)
}
export default App;