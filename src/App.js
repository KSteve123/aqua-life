import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components.js/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
;

function App() {
    return(
    <BrowserRouter>
    <Routes>
     <Route index element={<Main/>} />
     </Routes>
     </BrowserRouter>
    )
} export default App