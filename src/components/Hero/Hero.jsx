import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Button from "../ui/Button";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-indigo-600 to-blue-500 text-white">
      <div className="bg-green-500 text-white p-4">
        Tailwind is working!
      </div>
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 100 },
            move: { enable: true, speed: 2 },
            size: { value: 3 },
            opacity: { value: 0.7 },
          },
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center space-y-6 flex flex-col items-center justify-center w-full max-w-2xl p-8 bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-blur-md">
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
          Hi, I'm Dr. <span className="text-white">[Your Name]</span>
        </h1>
        <p className="text-2xl font-medium text-gray-200 drop-shadow-md">
          Exploring the Universe Through Equations
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all">
            Read My Papers
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all">
            🤝 Collaborate With Me
          </Button>
        </div>
      </div>
    </div>
  );
}
