import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Model } from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas
      camera={{ position: [40, 5, 5], fov: 20 }}
      style={{ backgroundColor: "#0e2b6c" }}
    >
      <Model />
      <Environment preset="city" />
      <directionalLight
        intensity={2}
        position={[0, 2, 3]}
      />
      <OrbitControls target={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
