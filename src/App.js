import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { FirstPage } from './components/FirstPage';
import { SecondPage } from './components/SecondPage';
import {Popup} from './components/Popup';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/SecondPage" element={<SecondPage/>}/>
        <Route path="Popup" element={<Popup/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;