import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 800;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 2.4 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#d946ef" size={0.025} sizeAttenuation depthWrite={false} />
    </Points>
  );
};

const BrainCore = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.25;
      ref.current.rotation.x += delta * 0.08;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={ref} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#a855f7"
          emissive="#d946ef"
          emissiveIntensity={0.4}
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.6}
        />
      </Sphere>
      <Sphere args={[1.55, 32, 32]}>
        <meshBasicMaterial color="#d946ef" wireframe transparent opacity={0.15} />
      </Sphere>
    </Float>
  );
};

const Brain3D = () => {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#d946ef" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#a855f7" />
        <pointLight position={[0, 5, -5]} intensity={0.5} color="#60a5fa" />
        <Suspense fallback={null}>
          <BrainCore />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Brain3D;
