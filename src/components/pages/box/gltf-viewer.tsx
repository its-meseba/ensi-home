'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GLTFViewerProps {
  modelUrl: string;
  height?: string;
  width?: string;
}

const Model = React.memo(
  ({ url, isRotating }: { url: string; isRotating: boolean }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>();

    useFrame((state, delta) => {
      if (isRotating && modelRef.current) {
        modelRef.current.rotation.y += delta * 0.5;
      }
    });

    return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} />;
  }
);

Model.displayName = 'Model';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white' }}>Loading... {Math.round(progress)}%</div>
    </Html>
  );
}

export default function GLTFViewer({
  modelUrl,
  height = '50vh',
  width = '50vh',
}: GLTFViewerProps) {
  const [isRotating, setIsRotating] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleInteraction = () => {
    setIsRotating(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsRotating(true);
    }, 100);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const isMouseInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isMouseInside) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: height, width: width, overflow: 'hidden' }}
      onClick={handleInteraction}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <Canvas camera={{ position: [2.5, 2.5, 2.5] }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 5, 0]} intensity={2.5} />
        <pointLight position={[-5, 5, 5]} intensity={2.0} />
        <pointLight position={[5, -5, 5]} intensity={2.0} />
        <pointLight position={[5, 5, -5]} intensity={2.0} />
        <directionalLight position={[0, 10, 5]} intensity={2.5} />
        <directionalLight position={[-10, 10, 10]} intensity={2.5} />

        <Suspense fallback={<Loader />}>
          <Model url={modelUrl} isRotating={isRotating} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          minDistance={isSmallScreen ? 18 : 15} // 20% more zoomed out for small screens
          maxDistance={isSmallScreen ? 18 : 15}
          enableRotate={!isRotating}
          enablePan={false}
          enableDamping={false}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

GLTFViewer.displayName = 'GLTFViewer';
