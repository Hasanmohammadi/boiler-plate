import { useEffect, useRef } from 'react';

export default function AirplaneDashed() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        // Define the starting and ending points of the curve
        const startX = 25;
        const startY = 80;
        const endX = 400;
        const endY = 400;

        // Control points for the curve
        const controlX1 = 400;
        const controlY1 = 100;
        const controlX2 = 200;
        const controlY2 = 160;

        // Set the line style to dashed
        context.setLineDash([7, 7]);

        // Set the line color to red
        context.strokeStyle = 'red';

        // Set the line width to a thicker value (e.g., 3 pixels)
        context.lineWidth = 1;

        // Draw the dashed curve line
        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(
          controlX1,
          controlY1,
          controlX2,
          controlY2,
          endX,
          endY,
        );
        context.stroke();
      }
    }
  }, []);
  return (
    <>
      <canvas className="pl-6" ref={canvasRef} width={300} height={200}>
        {' '}
      </canvas>
    </>
  );
}
