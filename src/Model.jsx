import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
export function Model() {
  const { nodes } = useGLTF("/Untitled.glb");

  const X = useRef(null);

  //   useFrame(() => {
  //     X.current.rotation.x += 0.009;
  //     X.current.rotation.y += 0.009;
  //     X.current.rotation.z += 0.009;
  //   });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <>
      <Text
        rotation={[0, 1.56, 0]}
        color="white"
        fontSize={5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="right"
        anchorY="middle"
        position={[-8, 0, -7]}
      >
        KoinX
      </Text>
      <group ref={X}>
        <mesh {...nodes.Cube002}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
        <mesh {...nodes.Cube}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
        <mesh {...nodes.Cube001}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/Untitled.glb");
