import Homepage from './components/HomePage'
import React, { useState, useEffect } from "react";
import {ReactHeight} from 'react-height';

const randRange = (min, max) => Math.random() * (max - min) + min;

const Starfield = ({ width, height, stars, maxSize = 0.75, ...props }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", zIndex: -1 }}
    preserveAspectRatio="none"
  >
    {[...Array(stars)].map(() => (
      <circle
        fill="#fff"
        cx={randRange(0, width)}
        cy={randRange(0, height)}
        r={randRange(0.05, maxSize)}
        style={{
          animation: `twinkle ${randRange(1, 10)}s ease-in-out infinite`
        }}
      />
    ))}
  </svg>
);

const App = () => {
  let load;

  function useWindowDimensions() {

    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(document.documentElement.scrollHeight);
  
    React.useState(() => {
      const listener = () => {
        setWidth(window.innerWidth)
        setHeight(document.documentElement.scrollHeight)
      }
  
      window.addEventListener('resize', listener);
  
      return () => {
        window.removeEventListener('resize', listener);
      }
    })
  
    return {
      width,
      height,
    }
  }

  const { width, height } = useWindowDimensions()

  useEffect( () => {
    function updatePageSize(){
      setWidth(window.innerWidth)
    }
  })

  return (
    <>
    <Starfield width={width} height={height} stars={1000} />
    <Homepage /> 
    </>
  );
  }

export default App;
