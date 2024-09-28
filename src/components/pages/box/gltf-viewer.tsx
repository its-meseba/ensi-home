'use client';

import React, { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

interface GLTFViewerProps {
  modelUrl: string;
}

const Model = React.memo(({ url }: { url: string }) => {
  const { scene } = useGLTF(url);

  // Ensure the model is centered by adjusting its position
  return <primitive object={scene} position={[0, 0, 0]} />;
});

Model.displayName = 'Model';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white' }}>Loading... {Math.round(progress)}%</div>
    </Html>
  );
}

export default function GLTFViewer({ modelUrl }: GLTFViewerProps) {
  return (
    <div style={{ height: '50vh', width: '50vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        {/* Ambient light to give a base level of illumination */}
        <ambientLight intensity={1.5} />

        {/* Point light above the model */}
        <pointLight position={[0, 5, 0]} intensity={2.5} />

        {/* Additional lights around the model */}
        <pointLight position={[-5, 5, 5]} intensity={2.0} />
        <pointLight position={[5, -5, 5]} intensity={2.0} />
        <pointLight position={[5, 5, -5]} intensity={2.0} />

        {/* Directional light to simulate sunlight */}
        <directionalLight position={[0, 10, 5]} intensity={2.5} />
        <directionalLight position={[-10, 10, 10]} intensity={2.5} />

        <Suspense fallback={<Loader />}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={0}
          minDistance={0.1875} // Set how close you can zoom in
          maxDistance={0.1875} // Set a maximum zoom distance to prevent zooming out too much
        />
      </Canvas>
    </div>
  );
}

GLTFViewer.displayName = 'GLTFViewer';
