import { Canvas } from '@react-three/fiber';

function Cube(props) {
  return (
    <div id='container'>
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
}

export default Cube;
