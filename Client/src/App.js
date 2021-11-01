// import logo from './logo.svg';
import './App.css';
  import * as React from 'react';
import MenuBox from './components/MenuBox/MenuBox';

import NavBar from './components/navBar/NavBar';
import PopularPosts from './components/PopularPosts/PopularPosts';
// import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <MenuBox/>
      <PopularPosts/>
    </div>
  );
}

export default App;
