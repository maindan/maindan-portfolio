import { useLocation } from "react-router-dom";

import { Navbar } from "@/components/navbar";
import Beams from "@/styles/effects/beams/Beams";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  return (
    <div className="relative flex flex-col h-screen bg-transparent">
      {location.pathname === "/" && (
        <div className="absolute w-[100vw] h-[100vh] -z-0">
          <Beams
            beamHeight={15}
            beamNumber={12}
            beamWidth={2}
            lightColor="#ffffff"
            noiseIntensity={1.75}
            rotation={45}
            scale={0.2}
            speed={2}
          />
        </div>
      )}
      <Navbar />
      <main className="container mx-auto max-w-6xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3" />
    </div>
  );
}
