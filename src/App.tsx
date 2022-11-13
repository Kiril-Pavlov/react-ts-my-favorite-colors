import { useState } from 'react';
import './App.css';
import FavoriteColorsList from './components/FavoriteColorsList';
import SelectColor from './components/SelectColor';
import Title from './components/Title';

function App() {

  const [myFavoriteColors,setMyFavoriteColors] =useState<{name:string;code:string}[]>([
    {
      name:"Custom Red",
      code:"#BB0000"
    },
    {
      name:"Light Black",
      code:"#222222"
    },
    {
      name:"Lime Green",
      code:"#00AA00"
    },
  ])

  return (
    <div className="main-container">
      <Title title="My Favorite Colors"/>
      <SelectColor />
      <FavoriteColorsList colors={myFavoriteColors}/>
    </div>
  );
}

export default App;
