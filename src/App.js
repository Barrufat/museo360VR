
import './App.css';
// import { ModelMuseu } from './Museu';
import { ModelMuseu } from './Museu1';
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, useGLTF } from '@react-three/drei'
// // import { Selection, EffectComposer, Outline } from '@react-three/postprocessing'
// import * as THREE from "three";
// import { Environment } from '@react-three/drei';

function App() {

  const [playState, setPlayState] = useState(false);
  const [camZ, setCamZ] = useState(1.53);
  const [cam1, setCam1] = useState(true);
  const [cam2, setCam2] = useState(false);
  const [cam3, setCam3] = useState(false);
  const [cam4, setCam4] = useState(false);
  const [cam5, setCam5] = useState(false);
  const [cam6, setCam6] = useState(false);


  const Pausar = () => {
    setPlayState(!playState);
  }

  const CamIzk = () => {
    setCamZ(camZ - 0.1)
    console.log(camZ)
  }

  const CamDer = () => {
    setCamZ(camZ + 0.1)
    console.log(camZ)
  }

  const Cam1 = () => {
    setCam1(true);
    setCam2(false);
    setCam3(false);
    setCam4(false);
    setCam5(false);
    setCam6(false);
  }

  const Cam2 = () => {
    setCam1(false);
    setCam2(true);
    setCam3(false);
    setCam4(false);
    setCam5(false);
    setCam6(false);
  }
  const Cam3 = () => {
    setCam1(false);
    setCam2(false);
    setCam3(true);
    setCam4(false);
    setCam5(false);
    setCam6(false);
  }
  const Cam4 = () => {
    setCam1(false);
    setCam2(false);
    setCam3(false);
    setCam4(true);
    setCam5(false);
    setCam6(false);
  }

  const Cam5 = () => {
    setCam1(false);
    setCam2(false);
    setCam3(false);
    setCam4(false);
    setCam5(true);
    setCam6(false);
  }

  const Cam6 = () => {
    setCam1(false);
    setCam2(false);
    setCam3(false);
    setCam4(false);
    setCam5(false);
    setCam6(true);
  }

  return (
    <div className="App">
      <div>
        <button onClick={CamIzk}> Izquierda</button>
        <button onClick={Pausar}>Pause</button>
        <button onClick={CamDer}> Derecha </button>
      </div>
      <button onClick={Cam1}> Cam1</button>
      <button onClick={Cam2}> Cam2</button>
      <button onClick={Cam3}> Cam3</button>
      <button onClick={Cam4}> Cam4</button>
      <button onClick={Cam5}> Cam5</button>
      <button onClick={Cam6}> Cam6</button>
      <div>

      </div>
      <div className='product-canvas'>
        <Canvas>
          <ambientLight shadow={0.1} intensity={0.1} />
          {/* <primitive object={new THREE.AxesHelper(10)} /> */}
          {/* <spotLight position={[1, 1, 1]} angle={0.40} intensity={0.01} penumbra={1} /> */}
          <pointLight position={[1, 1, 1]} intensity={0.2} />
          <Suspense fallback={null}>
            {/* <EffectComposer multisampling={8} autoClear={false}>
              <Outline blur visibleEdgeColor="grey" edgeStrength={100} width={500} />
            </EffectComposer> */}
            {/* <OrbitControls/> */}
            <ModelMuseu playState={playState} camZ={camZ} cam1={cam1} cam2={cam2} cam3={cam3} cam4={cam4} cam6={cam6} cam5={cam5} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
