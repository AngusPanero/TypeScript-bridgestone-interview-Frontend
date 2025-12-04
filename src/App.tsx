import './App.css'
import { Canvas } from '@react-three/fiber';    
import Scene from './components/Scene';  
import AppRouter from './router/Router';

const App = () => {
  return (
      <div className="app-container">
        <Canvas className="three-background" camera={{ position: [0, 0, 10], fov: 75 }} >
          <Scene />
        </Canvas>

        <div className="ui-layer">
          <AppRouter />
        </div>
      </div>
  );
}

export default App
