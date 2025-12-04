import { OrbitControls } from "@react-three/drei";
import React from "react";
import WaveParticles from "./WavaParticles";

const Scene: React.FC = () => { 
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