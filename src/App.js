import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from "./components/Rank/Rank"
import Particles from "react-particles-js";
import './App.css';

const particlesOptions = {
    particles: {
        number: {
            value : 30,
            density: {
                enable: true,
                value_area: 500
            }
        }
    }
}
function App() {
  return (
    <div className="App">
        <Particles className='particles'
            params={particlesOptions}
        />
     <Navigation />
      <Logo/>
        <Rank />
         <ImageLinkForm />
        {/*  <Facerecognition /> */}
    </div>
  );
}

export default App;
