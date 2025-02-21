import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";  // ✅ Correct Import

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);  // ✅ Correct Function
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Particles
        init={loadSlim}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
          },
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-6xl">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
}
