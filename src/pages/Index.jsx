import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    canvas.addEventListener('mousemove', draw);
  };

  const draw = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    canvas.removeEventListener('mousemove', draw);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex items-center space-x-4 mb-4">
        <label htmlFor="colorPicker">Color:</label>
        <Input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <label htmlFor="brushSize">Brush Size:</label>
        <Input
          type="number"
          id="brushSize"
          value={brushSize}
          onChange={(e) => setBrushSize(e.target.value)}
          min="1"
          max="50"
        />
        <Button onClick={clearCanvas}>Clear</Button>
      </div>
      <canvas
        ref={canvasRef}
        width="800"
        height="600"
        className="border"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      ></canvas>
      <footer className="mt-4">
        <p>&copy; 2023 Canvas Drawing App</p>
      </footer>
    </div>
  );
};

export default Index;