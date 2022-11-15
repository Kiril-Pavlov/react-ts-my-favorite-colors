import { useState } from 'react';
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
  const [selectedColor, setSelectedColor] = useState<string>("")
  console.log(selectedColor)
  const [customName, setCustomName] = useState<string>("")

  //add color to my Favorite colors
  const addColor = () => {
    if (myFavoriteColors) {
      let newColor = {
        code:  selectedColor ,
        name:  customName 
      }
      // console.log(taskList)
       setMyFavoriteColors([...myFavoriteColors, newColor]);
      // localStorage.setItem("localTaskList", JSON.stringify([...taskList, newTask]))
       setCustomName("")
      // console.log(taskList)
    }
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
      <FavoriteColorsList colors={myFavoriteColors} />
    </div>
  );
}

export default App;
