import { OrbitControls } from "@react-three/drei";
import React from "react";
import WaveParticles from "./WavaParticles";

const Scene: React.FC = () => { // React.FC es una interfaz de tipos para componentes funcionales en React con TypeScript 
    return (
    <>
        <ambientLight intensity={0.6} />  
        <directionalLight position={[5, 5, 5]} /> 


        <WaveParticles />

        <OrbitControls /> 
    </>
    );
};

export default Scene;