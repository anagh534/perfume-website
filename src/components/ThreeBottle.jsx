import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function FuturisticBottle() {
  const group = useRef();
  const innerSphere = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.15;
      group.current.rotation.z = Math.sin(t * 0.2) * 0.05;
    }
    if (innerSphere.current) {
      innerSphere.current.position.y = Math.sin(t * 1.5) * 0.2;
      innerSphere.current.rotation.x = t * 0.5;
      innerSphere.current.rotation.y = t * 0.8;
    }
  });

  // Create a twisted geometric shape for the outer glass
  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.8, 0.4, 3, 6, 1, false);
    const positionAttribute = geo.attributes.position;
    const vertex = new THREE.Vector3();
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      const angle = vertex.y * 0.5; // Twist
      const x = vertex.x * Math.cos(angle) - vertex.z * Math.sin(angle);
      const z = vertex.x * Math.sin(angle) + vertex.z * Math.cos(angle);
      positionAttribute.setXYZ(i, x, vertex.y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Outer Futuristic Glass Obelisk */}
      <mesh geometry={geometry}>
        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={1024}
          transmission={1}
          roughness={0.05}
          thickness={1.5}
          ior={1.5}
          chromaticAberration={0.15}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={2}
          attenuationColor="#ffffff"
          color="#f4f4f5"
        />
      </mesh>

      {/* Floating Inner Chrome Sphere (The 'Essence') */}
      <mesh ref={innerSphere} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color="#FAFAFA"
          metalness={1}
          roughness={0.1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Modern Cap / Atomizer Ring */}
      <mesh position={[0, 1.6, 0]}>
        <torusGeometry args={[0.3, 0.05, 16, 32]} />
        <meshStandardMaterial
          color="#A1A1AA"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
        <meshStandardMaterial
          color="#050505"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function ThreeBottle() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, -5]} intensity={1.5} color="#ffffff" />
        <spotLight position={[-5, 5, 5]} angle={0.25} penumbra={1} intensity={2} color="#A1A1AA" />
        
        {/* Iridescent Accent Lights */}
        <pointLight position={[2, 0, 2]} intensity={2} color="#6366f1" />
        <pointLight position={[-2, -2, 2]} intensity={2} color="#a855f7" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <FuturisticBottle />
        </Float>

        <Environment preset="city" />

        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.6}
          scale={10}
          blur={3}
          far={5}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
