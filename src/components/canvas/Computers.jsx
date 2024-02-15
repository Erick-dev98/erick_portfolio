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
    <div>Computers</div>
  )
}

export default Computers