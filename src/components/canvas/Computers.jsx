import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
//This helps us import 3d models from react-three
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  //Import GLTF model
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    //Let's start with mesh element instead of div
    <mesh>
      <hemisphereLight intensity={4} 
      groundColor="black" />
      <pointLight intensity={2} />
      <spotLight 
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-maSize={1024}
      />
      <primitive
      object={computer.scene}
      scale={0.75}
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas