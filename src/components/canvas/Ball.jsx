import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.5]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
}

const BallCanvas = ({ icon }) => {
  const [canvasHeight, setCanvasHeight] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const canvasHeight = windowHeight <= 500 ? windowHeight / 2 : 'auto';
      setCanvasHeight(canvasHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hidden xs:block" style={{ height: canvasHeight }}>
      <Canvas
        frameloop='demand'
        dpr={[1,2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon}/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  );
}

export default BallCanvas;
