import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { canvas } from "@react-three/fiber";
//This helps us import 3d models from react-three
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import { CanvasLoader } from '../Loader';

const Computers = () => {
  //Import GLTF model
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    //Let's start with mesh element instead of div
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
    </mesh>
  )
}

export default Computers