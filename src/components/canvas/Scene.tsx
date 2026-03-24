import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

export function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 1.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function NeuralNetwork() {
  const count = 40;
  const linesRef = useRef<THREE.LineSegments>(null!);
  
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return p;
  }, []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * count * 6);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = lineGeometry.attributes.position.array as Float32Array;
    let idx = 0;

    points.forEach((p, i) => {
      p.x += Math.sin(time + i) * 0.002;
      p.y += Math.cos(time + i) * 0.002;
      
      points.forEach((p2, j) => {
        if (i === j) return;
        const dist = p.distanceTo(p2);
        if (dist < 3) {
          positions[idx++] = p.x;
          positions[idx++] = p.y;
          positions[idx++] = p.z;
          positions[idx++] = p2.x;
          positions[idx++] = p2.y;
          positions[idx++] = p2.z;
        }
      });
    });
    
    lineGeometry.attributes.position.needsUpdate = true;
    linesRef.current.rotation.y = time * 0.05;
  });

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial color="#7000ff" transparent opacity={0.2} />
    </lineSegments>
  );
}
