import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlogin from './components.js/UserLogin';
import Main from './components.js/Main';

function App() {
    return(
    <BrowserRouter>
    <Routes>
     <Route index element={<Main/>} />
     </Routes>
     </BrowserRouter>
    )
} export default App