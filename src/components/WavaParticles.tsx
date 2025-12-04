import { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const WaveParticles = () => {
    const pointsRef = useRef<THREE.Points>(null!);
    
    const textureParticle = useLoader(THREE.TextureLoader, "../../public/textures/particle.png");

    const size = 160; // resolución del campo
    const separation = 0.25;
    const count = size * size;

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const color = new THREE.Color();
        let i = 0;

        for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const i3 = i * 3;

            positions[i3]     = (x - size / 2) * separation;
            positions[i3 + 1] = 0;
            positions[i3 + 2] = (y - size / 2) * separation;

            // Color por posición (no random)
            color.setHSL(x / size, 1, 0.6);

            colors[i3]     = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            i++;
        }
        }

        return { positions, colors };
    }, []);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

        let i = 0;
        for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const i3 = i * 3;

            // Onda matemática viva
            pos[i3 + 1] = Math.sin((x + time * 4) * 0.3) *  Math.cos((y + time * 4) * 0.3) *  2.2; i++;
        }
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.rotation.y = time * 0.1;
    });

    return (
        <points ref={pointsRef}>
        <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>

        <pointsMaterial size={0.045} map={textureParticle} vertexColors transparent opacity={0.95} depthWrite={false} blending={THREE.AdditiveBlending} />
        </points>
    );
};

export default WaveParticles;
