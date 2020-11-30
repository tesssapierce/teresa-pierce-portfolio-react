import Homepage from './components/HomePage'
import React from 'react';

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

class Application extends React.Component {
  render() {
    return <Starfield width={800} height={600} stars={1500} />;
  }
}

function App() {
  return (
    <>
    <Application />
    <Homepage /> 
    </>
  );
}

export default App;
