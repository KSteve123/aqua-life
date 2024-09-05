import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components.js/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Check1 from './components.js/ViewParam';
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