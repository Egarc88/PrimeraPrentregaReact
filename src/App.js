import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
/* import ItemDetailContainer from './Components/ItemDetailContainer'; */
import './Components/Styles/NavBar.css';
import './Components/Styles/CartWiget.css';
import './Components/Styles/ItemListContainer.css';
import './Components/Styles/Categorias.css';
import './Components/Styles/Cover.css';



function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}/>
          <Route path='/category/:id' element={<ItemListContainer greeting="Nuestras Categorias"/>}/>
         {/*  <Route path='/item/:id' element={<ItemDetailContainer/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
    </>

  );
}

export default App;
