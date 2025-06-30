import React, { useState } from 'react';
import './App.css';

function App() {

  const [points, setPoints] = useState([]);
  const [undoPoints, setUndoPoints] = useState([]);

  const handleClick = (e) => {
    setPoints([...points, { xAxis: e.clientX, yAxis: e.clientY }])
  }

  const handleUndo = () => {
    const updatedPoints = points.slice();
    const lastPoint = updatedPoints.pop();
    if (lastPoint) {
      setUndoPoints(prev => [...prev, lastPoint]);
      setPoints(updatedPoints);
    }
  }

  const handleRedo = () => {
    const updatedUndo = undoPoints.slice();
    const lastPoint = updatedUndo.pop();
    if (lastPoint) {
      setUndoPoints(updatedUndo);
      setPoints(prev => [...prev, lastPoint]);
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
