import "./App.css";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import Configurator from "./components/Configurator";
import { CustomProvider } from "./context/CustomContext";
function App() {
  return (
    <CustomProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 10, 20]} />

          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomProvider>
  );
}

export default App;
