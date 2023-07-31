import React from 'react';
import './App.css';
import Sectionhead from './Component/Section1/Sectionhead';
import Section2 from './Component/Section2/Section-2';
import Section3 from './Component/Section3/Section-3';
import Section4 from './Component/Section4/Section-4';


function App() {
  return (
    <div className="App">
      <Sectionhead />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
