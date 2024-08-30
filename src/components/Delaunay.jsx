import { useEffect, useRef } from 'react';

function DelaunayComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const points = [
            [200, 200],
            [400, 200],
            [300, 400],
            [500, 500],
            [100, 100]
        ];

        // Assuming Delaunay is defined globally by the script
        const delaunay = Delaunay.from(points);
        const voronoi = delaunay.voronoi([0, 0, 600, 600]);

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        voronoi.render(context);
        context.strokeStyle = 'black';
        context.stroke();

        points.forEach(([x, y]) => {
            context.beginPath();
            context.arc(x, y, 3, 0, 2 * Math.PI);
            context.fillStyle = 'red';
            context.fill();
        });
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={600}
            height={600}
        ></canvas>
    );
}

export default DelaunayComponent;
