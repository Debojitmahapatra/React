// import React from "react";
import { Netflix_Series } from "./components/Netflix";
// import { Practices } from "./practicts";
// import { WebSeriesGallery } from "./components/Webseries.jsx";
// import './components/Netflix.module.css'
import './App.css'
// import { State } from './components/hooks/state'
import { Heading } from "./components/Heading";
export const App=()=>{
  return (
    <>
    <Heading id='Welcome to Our WebSeries'/>
      <Netflix_Series/>
<Heading id='Thank You for visit'/>
         
    </>
  )
}


