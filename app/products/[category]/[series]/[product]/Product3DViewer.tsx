"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import Image from "next/image";

interface Product3DViewerProps {
  modelPath?: string;
  fallbackImage: string;
}

// Internal component to load and render the model
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  // You might need to adjust scale/position based on your specific GLTF models
  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
}

export function Product3DViewer({
  modelPath,
  fallbackImage,
}: Product3DViewerProps) {
  if (!modelPath) {
    return (
      <div className="w-full h-[70vh] lg:h-[90vh] relative">
        <Image
          src={fallbackImage}
          alt="Product 3D View Unavailable"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
    );
  }

  return (
    <div
      className="w-full h-[70vh] lg:h-[90vh] cursor-grab active:cursor-grabbing bg-neutral-100 relative group"
      style={{ willChange: "transform" }}
    >
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-neutral-600 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 pointer-events-none">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        Drag to rotate
      </div>

      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-50">
            <Loader2 className="w-8 h-8 text-neutral-300 animate-spin" />
          </div>
        }
      >
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 45 }}
          dpr={[1, 2.5]} // Increase max DPR for ultra-sharp NPU/GPU clarity on 4K/5K screens
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
            preserveDrawingBuffer: true,
            alpha: true,
          }}
          style={{ pointerEvents: "auto" }}
        >
          <color attach="background" args={["#f5f5f5"]} />

          {/* Soft studio lighting */}
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          {/* Realistic environment reflections */}
          <Environment preset="city" />

          <PresentationControls
            global
            // @ts-expect-error known react-spring typing issue with drei
            config={{ mass: 2, tension: 500 }}
            snap={true}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]} // Vertical limits
            azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal limits
          >
            <Model url={modelPath} />
          </PresentationControls>

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={10}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Preload the model so it's ready faster if we know the path (optional performance boost)
// useGLTF.preload('/models/workstation.gltf')
