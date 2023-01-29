import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
/* import Cover from './Components/cover.jsx' */
import Categories from './Components/Categorias';

import './Components/Styles/NavBar.css';
import './Components/Styles/CartWiget.css';
import './Components/Styles/ItemListContainer.css';
import './Components/Styles/Categorias.css';
import './Components/Styles/Cover.css';



function App() {
  return (
    <>
    <NavBar/>
    
    {/* <Cover/> */}
    <ItemListContainer greeting="Nuestros Productos"/>
    <Categories/>
    </>

  );
}

export default App;
