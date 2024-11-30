'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GLTFViewerProps {
  modelUrl: string;
}

const Model = React.memo(
  ({ url, isRotating }: { url: string; isRotating: boolean }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>();

    useFrame((state, delta) => {
      if (isRotating && modelRef.current) {
        modelRef.current.rotation.y += delta * 0.5; // Adjust rotation speed here
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

export default function GLTFViewer({ modelUrl }: GLTFViewerProps) {
  const [isRotating, setIsRotating] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{ height: '50vh', width: '50vh', overflow: 'hidden' }}
      onClick={handleInteraction}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <Canvas camera={{ position: [0, 0, 2.5] }}>
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
          minDistance={0.1875}
          maxDistance={0.1875}
          enableRotate={!isRotating}
        />
      </Canvas>
    </div>
  );
}

GLTFViewer.displayName = 'GLTFViewer';

// 'use client';

// import React, { Suspense, useRef, useState, useEffect } from 'react';
// import { OrbitControls, useProgress } from '@react-three/drei';
// import { Html } from '@react-three/drei';
// import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// interface ModelViewerProps {
//   modelUrl: string;
// }

// const Model = React.memo(
//   ({ url, isRotating }: { url: string; isRotating: boolean }) => {
//     const modelRef = useRef<THREE.Group>();
//     const [model, setModel] = useState<THREE.Group | null>(null);

//     useEffect(() => {
//       const loadModel = async () => {
//         const extension = url.split('.').pop()?.toLowerCase();
//         let loadedModel: THREE.Group | null = null;

//         if (extension === 'gltf' || extension === 'glb') {
//           try {
//             const gltf = await new Promise<THREE.GLTF>((resolve, reject) => {
//               new GLTFLoader().load(url, resolve, undefined, reject);
//             });
//             loadedModel = gltf.scene;
//           } catch (error) {
//             console.error('Error loading GLTF/GLB:', error);
//           }
//         } else if (extension === 'obj') {
//           const mtlUrl = url.replace('.obj', '.mtl');
//           try {
//             const materials = await new Promise<THREE.MaterialCreator>(
//               (resolve, reject) => {
//                 new MTLLoader().load(mtlUrl, resolve, undefined, reject);
//               }
//             );
//             materials.preload();
//             const objLoader = new OBJLoader();
//             objLoader.setMaterials(materials);
//             loadedModel = await new Promise<THREE.Group>((resolve, reject) => {
//               objLoader.load(url, resolve, undefined, reject);
//             });
//           } catch (error) {
//             console.error('Error loading OBJ/MTL:', error);
//             try {
//               loadedModel = await new Promise<THREE.Group>(
//                 (resolve, reject) => {
//                   new OBJLoader().load(url, resolve, undefined, reject);
//                 }
//               );
//             } catch (objError) {
//               console.error('Error loading OBJ without MTL:', objError);
//             }
//           }
//         } else {
//           console.error('Unsupported file format:', extension);
//         }

//         if (loadedModel) {
//           setModel(loadedModel);
//         }
//       };

//       loadModel();
//     }, [url]);

//     useFrame((state, delta) => {
//       if (isRotating && modelRef.current) {
//         modelRef.current.rotation.y += delta * 0.5; // Adjust rotation speed here
//       }
//     });

//     if (!model) {
//       return null; // Or a loading indicator
//     }

//     return <primitive ref={modelRef} object={model} position={[0, 0, 0]} />;
//   }
// );

// Model.displayName = 'Model';

// function Loader() {
//   const { progress } = useProgress();
//   return (
//     <Html center>
//       <div style={{ color: 'white' }}>Loading... {Math.round(progress)}%</div>
//     </Html>
//   );
// }

// export default function ModelViewer({ modelUrl }: ModelViewerProps) {
//   const [isRotating, setIsRotating] = useState(true);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const handleInteraction = () => {
//     setIsRotating(false);
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     timeoutRef.current = setTimeout(() => {
//       setIsRotating(true);
//     }, 100);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       style={{ height: '50vh', width: '50vh', overflow: 'hidden' }}
//       onClick={handleInteraction}
//       onMouseMove={handleInteraction}
//       onTouchStart={handleInteraction}
//     >
//       <Canvas camera={{ position: [0, 0, 2.5] }}>
//         <ambientLight intensity={1.5} />
//         <pointLight position={[0, 5, 0]} intensity={2.5} />
//         <pointLight position={[-5, 5, 5]} intensity={2.0} />
//         <pointLight position={[5, -5, 5]} intensity={2.0} />
//         <pointLight position={[5, 5, -5]} intensity={2.0} />
//         <directionalLight position={[0, 10, 5]} intensity={2.5} />
//         <directionalLight position={[-10, 10, 10]} intensity={2.5} />

//         <Suspense fallback={<Loader />}>
//           <Model url={modelUrl} isRotating={isRotating} />
//         </Suspense>
//         <OrbitControls
//           enableZoom={true}
//           minDistance={15}
//           maxDistance={15}
//           enableRotate={!isRotating}
//         />
//       </Canvas>
//     </div>
//   );
// }

// ModelViewer.displayName = 'ModelViewer';
