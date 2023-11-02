import React, { useState } from 'react';
import './App.css';

function App() {

  const [points, setPoints] = useState([]);
  const [undoPoints, setUndoPoints] = useState([]);

  const handleClick = (e) => {
    setPoints([...points, { xAxis: e.clientX, yAxis: e.clientY }])
  }

  const handleUndo = (e) => {
    const actualPoints = points;
    const lastPoint = actualPoints.pop();
    if (lastPoint) {
      setUndoPoints([...undoPoints, lastPoint])
      setPoints(actualPoints);
    }
  }

  const handleRedo = (e) => {
    const lastPointRemoved = undoPoints.pop();
    if (lastPointRemoved) {
      setPoints([...points, lastPointRemoved]);
    }
  }

  return (
    <>
      <div className='buttonContainer'>
        <button disabled={points.length === 0} onClick={handleUndo}>Undo</button>
        <button disabled={undoPoints.length === 0} onClick={handleRedo}>Redo</button>
      </div>

      <div className="App" onClick={handleClick}>
        {points.map((point, index) => {
          return <div className='point' key={index} style={{
            top: point.yAxis - 18,
            left: point.xAxis - 18,
          }}>
          </div>
        })}

      </div>
    </>
  );
}

export default App;
