import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Html, MeshDistortMaterial, Sparkles } from '@react-three/drei';

function LiquidAura() {
  const wireframeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = t * 0.1;
      wireframeRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. The Core: Morphing Liquid Metal Blob */}
      <mesh>
        <sphereGeometry args={[1.4, 64, 64]} />
        <MeshDistortMaterial
          color="#050505"
          metalness={1}
          roughness={0.05}
          distort={0.4}
          speed={1.5}
          envMapIntensity={3}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 2. The Architecture: Rotating Geometric Wireframe */}
      <mesh ref={wireframeRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial 
          color="#A1A1AA" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>

      {/* 3. The Molecules: Floating Ambient Particles */}
      <Sparkles 
        count={150} 
        scale={6} 
        size={1.5} 
        speed={0.4} 
        opacity={0.4} 
        color="#FAFAFA" 
      />
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 whitespace-nowrap animate-pulse">
        Synthesizing...
      </div>
    </Html>
  );
}

export default function ThreeBottle() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[700px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Safe to increase slightly since the shader is highly optimized
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} 
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, -5]} intensity={2} color="#ffffff" />
          <spotLight position={[-5, 5, 5]} angle={0.5} penumbra={1} intensity={2} color="#A1A1AA" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <LiquidAura />
          </Float>

          {/* High contrast studio lighting reflection */}
          <Environment preset="studio" resolution={256} />

          {/* Clean minimal shadow */}
          <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[5, 5]} />
            <meshBasicMaterial color="#000000" transparent opacity={0.4} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
