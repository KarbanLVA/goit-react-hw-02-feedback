import { Component } from "react";
import Section from "./Section/Section.jsx";



export const App = () => {   
    return (    
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >      
        <Section/>
        {/* React homework template */}
      </div>
    );
}

