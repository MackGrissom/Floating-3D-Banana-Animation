import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import {useGLTF, Environment} from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'


function Banana({z}) {
const ref = useRef()
const { nodes, materials } = useGLTF('/banana-v1-v1-transformed.glb')
const { viewport, camera} = useThree()
const {width, height} = viewport.getCurrentViewport(camera, [0,0,-10])


const [data] = useState({
  x: THREE.MathUtils.randFloatSpread(2),
  y:THREE.MathUtils.randFloatSpread(height),
  rX: Math.random() * Math.PI,
  rY: Math.random() * Math.PI,
  rZ: Math.random() * Math.PI,
})

  useFrame((state) => {
    ref.current.rotation.set((data.rX += 0.001), (data.rY += 0.001), data.rZ += 0.0005)
    ref.current.position.set(data.x * width,(data.y += 0.025), z)
    if (data.y > height) data.y = -height
    

  })

  return (
    
    <mesh geometry={nodes.Banana.geometry} 
    ref={ref}
    material={materials.skin} 
   />
  )
}

useGLTF.preload('/banana-v1-v1-transformed.glb')

 function Hero() {
 return  <h1> hi</h1>
}
export default function App({count = 350, depth=70}) {
  return ( 
  <Canvas gl={{alpha: false}} camera={{near: 0.01, far: 110, fov: 40 }}>
    <color attach="background" args={["#ffde59"]} />
    
    <spotLight position={[10,10,10]} intensity={1} />
    <Suspense fallback={null}>

    {Array.from({length: count}, (_, i) => (<Banana key={ i } z={-(i / count) * depth - 50}/>))}
    <Environment preset='sunset'/>
    <EffectComposer>
      <DepthOfField target={[0,0,depth / 2]} focalLength={0.1} bokehScale={3} height={700}/>
    </EffectComposer>
    </Suspense>
  
   
  </Canvas>

)
}  