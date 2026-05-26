'use client'
import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Torus, Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

// Existing — unchanged
export function FloatingBlob({ position = [0,0,0], color = '#219ebc', speed = 1 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed
    ref.current.rotation.y = t * 0.15
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.12
  })
  return (
    <Sphere ref={ref} args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial color={color} distort={0.35} speed={2} roughness={0.1} metalness={0.4} />
    </Sphere>
  )
}

export function OrbitRing({ radius = 2, color = '#fb8500', speed = 0.5 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * speed * 0.4
    ref.current.rotation.z = t * speed * 0.2
  })
  return (
    <Torus ref={ref} args={[radius, 0.015, 16, 100]}>
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </Torus>
  )
}

export function FloatingOcta({ position = [0,0,0], color = '#fb8500' }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.4
    ref.current.rotation.y = t * 0.3
    ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.15
  })
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.35]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.7} />
    </mesh>
  )
}

export function WireframeIco({ position = [0,0,0] }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.2
    ref.current.rotation.y = t * 0.3
    ref.current.position.y = position[1] + Math.cos(t * 0.5) * 0.2
  })
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial color="#219ebc" wireframe transparent opacity={0.4} />
    </mesh>
  )
}

export function ParticleField({ count = 150, color = '#219ebc' }) {
  const ref = useRef()
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i*3]   = (Math.random()-0.5)*8
      arr[i*3+1] = (Math.random()-0.5)*8
      arr[i*3+2] = (Math.random()-0.5)*8
    }
    return arr
  })
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.04
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.022} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

// NEW — Glowing DNA Helix (two intertwined helixes)
export function DNAHelix({ position = [0,0,0] }) {
  const groupRef = useRef()
  const points1 = useMemo(() => {
    const pts = []
    for (let i = 0; i < 60; i++) {
      const t = (i / 60) * Math.PI * 4
      pts.push(new THREE.Vector3(Math.cos(t) * 0.4, (i / 60) * 3 - 1.5, Math.sin(t) * 0.4))
    }
    return pts
  }, [])
  const points2 = useMemo(() => {
    const pts = []
    for (let i = 0; i < 60; i++) {
      const t = (i / 60) * Math.PI * 4 + Math.PI
      pts.push(new THREE.Vector3(Math.cos(t) * 0.4, (i / 60) * 3 - 1.5, Math.sin(t) * 0.4))
    }
    return pts
  }, [])
  const curve1 = useMemo(() => new THREE.CatmullRomCurve3(points1), [points1])
  const curve2 = useMemo(() => new THREE.CatmullRomCurve3(points2), [points2])

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.3
    groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.4) * 0.2
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Strand 1 */}
      <mesh>
        <tubeGeometry args={[curve1, 80, 0.025, 8, false]} />
        <meshStandardMaterial color="#219ebc" emissive="#219ebc" emissiveIntensity={0.5} roughness={0.1} metalness={0.6} />
      </mesh>
      {/* Strand 2 */}
      <mesh>
        <tubeGeometry args={[curve2, 80, 0.025, 8, false]} />
        <meshStandardMaterial color="#fb8500" emissive="#fb8500" emissiveIntensity={0.5} roughness={0.1} metalness={0.6} />
      </mesh>
      {/* Rungs between strands */}
      {Array.from({ length: 10 }).map((_, i) => {
        const t = i / 10
        const angle = t * Math.PI * 4
        const y = t * 3 - 1.5
        return (
          <mesh key={i} position={[0, y, 0]} rotation={[0, angle, 0]}>
            <cylinderGeometry args={[0.012, 0.012, 0.8, 6]} />
            <meshStandardMaterial color="#7dd3ed" emissive="#7dd3ed" emissiveIntensity={0.3} transparent opacity={0.7} />
          </mesh>
        )
      })}
    </group>
  )
}

// NEW — Floating Torus Knot
export function GlowTorusKnot({ position = [0,0,0], color = '#fb8500' }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.2
    ref.current.rotation.y = t * 0.35
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.18
  })
  return (
    <mesh ref={ref} position={position}>
      <torusKnotGeometry args={[0.4, 0.12, 128, 16, 2, 3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.05}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  )
}

// NEW — Wireframe Torus Knot (layered over solid)
export function WireframeTorusKnot({ position = [0,0,0], color = '#219ebc' }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.15
    ref.current.rotation.y = t * 0.25
    ref.current.position.y = position[1] + Math.cos(t * 0.4) * 0.15
  })
  return (
    <mesh ref={ref} position={position}>
      <torusKnotGeometry args={[0.55, 0.04, 80, 8, 3, 5]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  )
}

// NEW — Glowing floating sphere cluster
export function SphereCluster({ position = [0,0,0] }) {
  const groupRef = useRef()
  const spheres = useMemo(() => [
    { pos: [0, 0, 0],     color: '#219ebc', scale: 0.22 },
    { pos: [0.5, 0.3, 0], color: '#fb8500', scale: 0.15 },
    { pos: [-0.4, 0.4, 0.2], color: '#7dd3ed', scale: 0.12 },
    { pos: [0.2, -0.5, 0.3],  color: '#fb8500', scale: 0.1 },
    { pos: [-0.3, -0.3, -0.2], color: '#219ebc', scale: 0.13 },
  ], [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.2
    groupRef.current.rotation.x = t * 0.1
    groupRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.15
  })

  return (
    <group ref={groupRef} position={position}>
      {spheres.map((s, i) => (
        <mesh key={i} position={s.pos} scale={s.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={s.color}
            emissive={s.color}
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

// NEW — Floating grid plane (tech feel)
export function GridPlane() {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.position.y = -2 + Math.sin(clock.getElapsedTime() * 0.2) * 0.05
  })
  const size = 12
  const divisions = 14
  return (
    <gridHelper
      ref={ref}
      args={[size, divisions, '#219ebc', '#0a3040']}
      position={[0, -2, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

// NEW — Floating cube with emissive edges
export function GlowCube({ position = [0,0,0], color = '#fb8500' }) {
  const solidRef = useRef()
  const wireRef  = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    solidRef.current.rotation.x = t * 0.3
    solidRef.current.rotation.y = t * 0.4
    wireRef.current.rotation.x  = t * 0.3
    wireRef.current.rotation.y  = t * 0.4
    solidRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.18
    wireRef.current.position.y  = position[1] + Math.sin(t * 0.5) * 0.18
  })
  return (
    <>
      <mesh ref={solidRef} position={position}>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} transparent opacity={0.6} />
      </mesh>
      <mesh ref={wireRef} position={position}>
        <boxGeometry args={[0.48, 0.48, 0.48]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.8} />
      </mesh>
    </>
  )
}