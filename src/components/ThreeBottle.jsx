import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Html } from '@react-three/drei';
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

  // Create a twisted geometric shape for the outer glass (precomputed)
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
      {/* Outer Futuristic Glass Obelisk - ULTRA OPTIMIZED */}
      {/* Replaced heavy MeshTransmissionMaterial with native MeshPhysicalMaterial */}
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          transmission={0.9} // Glass-like transparency
          opacity={1}
          metalness={0.1}
          roughness={0.05}
          ior={1.5}
          thickness={1.5}
          envMapIntensity={2}
          color="#FAFAFA"
        />
      </mesh>

      {/* Floating Inner Chrome Sphere */}
      <mesh ref={innerSphere} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color="#FAFAFA"
          metalness={1}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Modern Cap / Atomizer Ring */}
      <mesh position={[0, 1.6, 0]}>
        <torusGeometry args={[0.3, 0.05, 12, 12]} />
        <meshStandardMaterial color="#A1A1AA" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 12]} />
        <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 whitespace-nowrap animate-pulse">
        Initializing 3D...
      </div>
    </Html>
  );
}

export default function ThreeBottle() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={1} // Force DPR to 1 to guarantee 60fps on all devices
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }} 
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, -5]} intensity={1.5} color="#ffffff" />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <FuturisticBottle />
          </Float>

          {/* Cheap environment lighting */}
          <Environment preset="city" resolution={128} />

          {/* Ultra cheap drop shadow (replaces extremely expensive ContactShadows) */}
          <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[4, 4]} />
            <meshBasicMaterial color="#000000" transparent opacity={0.3} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
