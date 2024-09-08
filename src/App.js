import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components.js/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './components.js/AdminLogin';
import UserCheck from './components.js/ReturnUser';

function App() {
    return(
    <BrowserRouter>
    <Routes>
     <Route index element={<Main/>} />
     <Route path='/AdminLogin' element={<AdminLogin/>} />
     <Route path='/ReturnUser' element={<UserCheck/>} />
     </Routes>
     </BrowserRouter>
    )
} export default App