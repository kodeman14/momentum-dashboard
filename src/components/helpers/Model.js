import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import bmwCar from "../../assets/bmwCar.glb";

// TODO : use different models based on user

function Model(props) {
  const { scene } = useGLTF(bmwCar);
  return <primitive object={scene} {...props} />;
}

function Visualizing() {
  const [isVisualReady, setIsVisualReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisualReady(true), 1500);
  }, []);
  console.log(isVisualReady);

  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={1}
        polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default Visualizing;
