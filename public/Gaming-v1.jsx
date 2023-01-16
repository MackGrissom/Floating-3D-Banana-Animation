/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 gaming-v1.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Gaming(props) {
  const { nodes, materials } = useGLTF('/gaming-v1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.2, 0.1, 0]} rotation={[0, 0, -1.38]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Object_13.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.Object_14.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object_15.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Object_17.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.Object_19.geometry} material={materials['Material.005']} />
    </group>
  )
}

useGLTF.preload('/gaming-v1-transformed.glb')
