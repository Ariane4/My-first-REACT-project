import React from 'react';
import './myStyle.css';
import Card from "./Card"
import Navigation from './Navigation';
import About from './About';
import Description from './Description'
import Component1 from './ComponentWithFunction'
import Component2 from './ComponentWithClass'
// import Picture from './step02.png'
const nameHero = "SuperMan"
const check = true

function App() {
  return (
    <div className="App">
      <Navigation />
      <p>{nameHero}</p>
      <p>{check === true ? "isChecked" : "notChecked"}</p>
      <About />
      <h1>Welcome to react</h1>
      <Card />
      <Component1 />
      <Component2 />
      <h1>Picture in public Folder</h1>
      <img src="./ilustracion_people.png" alt="" />
      <h1>Picture in Src Folder</h1>
      {/* <img src={Picture} alt="" /> */}
    </div>
  );
}

export default App;
