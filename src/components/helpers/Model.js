import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

import beamer from "../../assets/bmw_car.glb";
import building from "../../assets/old_building.glb";

// const fetchModel = (num) => {
//   let value = bmwCar;
//   switch (num) {
//     case 1:
//       value = astroPose;
//       break;
//     case 2:
//       value = oldBuilding;
//       break;
//     case 3:
//       value = fishSwimming;
//       break;
//     case 4:
//       value = octopusTacles;
//       break;
//     default:
//       value = bmwCar;
//       break;
//   }
//   return value;
// };

function Model(props) {
  const randomNum = Math.floor(Math.random() * 2) + 1;
  const modelToUse = randomNum === 1 ? beamer : building;

  const { scene } = useGLTF(modelToUse);
  return <primitive object={scene} {...props} />;
}

function Visualizing() {
  const [isVisualReady, setIsVisualReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisualReady(true), 1500);
  }, []);
  // console.log(isVisualReady);

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
