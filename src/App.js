//import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from './componets/NavBar'
import Links from './componets/Links'
import Work from './componets/work';
import SideLinks from './componets/SideLinks';
import styles from "./App.css"
import Why from './componets/why';
import Name from './componets/name';
import Namecom from './componets/Namecom';
import PictureName from './componets/PictureName';
const img = './img1.jpg';
const caption = 'Amukelani';


const images = [
  './img.jpg',
  //'./logo192.png',
  //'./logo512.png',

];


const App = () => {
  return (
    <div class="container-app">
      <div class="container-header">
        <Name className="name" />
        <NavBar />
        <Links />
      </div>

      <div class="body-container">
        <SideLinks />
      </div>
      <Namecom />
      <h1 class="name-head" className={styles.title}>Amukelani</h1>
      <PictureName img={img} caption={caption} />

      <div>
        <Why />

        <Work images={images} />
        
      </div>

    </div>








  )
}

export default App
