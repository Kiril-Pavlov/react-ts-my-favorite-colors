import { useState, useEffect } from 'react';
import './App.css';
import FavoriteColorsList from './components/FavoriteColorsList';
import SelectColor from './components/SelectColor';
import Title from './components/Title';

function App() {

  const [myFavoriteColors, setMyFavoriteColors] = useState<{ name: string; code: string }[]>([
    {
      name: "Custom Red",
      code: "#BB0000"
    },
    {
      name: "Light Black",
      code: "#222222"
    },
    {
      name: "Lime Green",
      code: "#00AA00"
    },
  ])
  const [selectedColor, setSelectedColor] = useState<string>("#78058f")
  console.log(selectedColor)
  const [customName, setCustomName] = useState<string>("")

  //get data from localStorage after reloading the page
  useEffect(() => {
    if (localStorage.getItem("localColorsList")) {
      //there is an error here in typescript if I dont add ||"[]" after getItem and it does not copy from local Storage
      let localData = JSON.parse(localStorage.getItem("localColorslist")||"[]");
      console.log(localData)
      setMyFavoriteColors(localData)
    }
  }, [])

  //add color to my Favorite colors
  const addColor = () => {
    if (myFavoriteColors) {
      let newColor = {
        code:  selectedColor ,
        name:  customName 
      }
      // console.log(taskList)
       setMyFavoriteColors([...myFavoriteColors, newColor]);
      localStorage.setItem("localColorsList", JSON.stringify([...myFavoriteColors, newColor]))
       setCustomName("")
      // console.log(taskList)
    }
  }

    //delete one task by id
    const handleDeleteColor = (color:any) => {
      
      const updated = myFavoriteColors.filter((c) => c.name !== color.name);
      setMyFavoriteColors(updated);
       localStorage.setItem("localColorsList", JSON.stringify(updated))
    }

  return (
    <div className="main-container">
      <Title title="My Favorite Colors" />
      <SelectColor
        select={selectedColor}
        name={customName}
        setColor={setSelectedColor}
        setName={setCustomName}
        add = {addColor}
      />
      <FavoriteColorsList 
        colors={myFavoriteColors} 
        deleteColor={handleDeleteColor}
      />
    </div>
  );
}

export default App;
