'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particlesArray = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 5
    }));
    setParticles(particlesArray);
  }, []);

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-gray-500 rounded-full opacity-20"
          style={{
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            animation: `float ${particle.duration}s infinite`
          }}
        />
      ))}
    </div>
  );
} 