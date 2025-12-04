import './App.css'
import { Canvas } from '@react-three/fiber';    
import Scene from './components/Scene';  

const App = () => {
  return (
    <> 
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Scene />
      </Canvas>
    </>
  )
}

export default App
