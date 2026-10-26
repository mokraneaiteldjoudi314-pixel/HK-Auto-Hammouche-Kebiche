import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import type { Group } from 'three';

function StudioCar() {
  const groupRef = useRef<Group | null>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.35;
    groupRef.current.rotation.x = -0.15;
  });

  return (
    <group ref={groupRef} position={[0, -0.35, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.55, 0]} receiveShadow>
        <circleGeometry args={[3.8, 64]} />
        <meshStandardMaterial color="#111418" metalness={0.75} roughness={0.6} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.35}>
        <group>
          <mesh position={[0, 0.35, 0]} castShadow>
            <boxGeometry args={[3.8, 0.7, 1.7]} />
            <meshStandardMaterial color="#c0c2c7" metalness={0.9} roughness={0.18} />
          </mesh>

          <mesh position={[0.2, 0.8, 0]} castShadow>
            <boxGeometry args={[1.8, 0.5, 1.4]} />
            <meshStandardMaterial color="#efeee9" metalness={0.8} roughness={0.22} />
          </mesh>

          <mesh position={[-1.12, 0.54, 0]} castShadow>
            <boxGeometry args={[0.9, 0.4, 1.45]} />
            <meshStandardMaterial color="#1b1d21" metalness={0.25} roughness={0.75} />
          </mesh>

          <mesh position={[-1.65, 0.18, 0]} castShadow>
            <boxGeometry args={[0.45, 0.45, 1.5]} />
            <meshStandardMaterial color="#0d0f12" metalness={0.65} roughness={0.3} />
          </mesh>

          <mesh position={[1.75, 0.1, 0.7]} castShadow>
            <boxGeometry args={[0.45, 0.45, 0.38]} />
            <meshStandardMaterial color="#12161b" metalness={0.85} roughness={0.18} />
          </mesh>
          <mesh position={[1.75, 0.1, -0.7]} castShadow>
            <boxGeometry args={[0.45, 0.45, 0.38]} />
            <meshStandardMaterial color="#12161b" metalness={0.85} roughness={0.18} />
          </mesh>

          {[[-1.2, -0.36, 0.95], [-1.2, -0.36, -0.95], [1.3, -0.36, 0.95], [1.3, -0.36, -0.95]].map(
            (wheelPosition, index) => (
              <mesh key={index} position={wheelPosition as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.38, 0.38, 0.32, 32]} />
                <meshStandardMaterial color="#0b0d10" metalness={0.55} roughness={0.5} />
              </mesh>
            ),
          )}
        </group>
      </Float>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="hero-visual" aria-label="Scène 3D abstraite premium">
      <Suspense fallback={<div className="scene-fallback">Chargement de la scène 3D…</div>}>
        <Canvas camera={{ position: [0, 1.5, 5], fov: 35 }} shadows>
          <color attach="background" args={['#08090B']} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 5, 2]} intensity={2.2} castShadow />
          <spotLight position={[-3, 5, 4]} intensity={2.5} angle={0.35} penumbra={0.8} />
          <StudioCar />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            rotateSpeed={0.8}
            minPolarAngle={Math.PI / 2.8}
            maxPolarAngle={Math.PI / 1.9}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
