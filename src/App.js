import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {
  return (
    <div className=" container App">
    <br />
    <h2>To Do List App</h2>
    <br />
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<TodoList/>}></Route>
      <Route path='/add' element={<AddTask/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>

    </BrowserRouter>
    {/* <Login/>
    <Register/> */}

    {/* <AddTask/>
    <TodoList/> */}
  

    
    </div>
  );
}

export default App;
