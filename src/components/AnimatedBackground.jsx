import { useEffect, useRef } from 'react';

const AnimatedBackground = ({ className = '', style = {} }) => {
  const canvasRef = useRef(null);
  const animationId = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Particle system configuration
    const particleCount = 50;
    const maxDistance = 120;

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(12, 78, 110, 0.8)');
      gradient.addColorStop(1, 'rgba(3, 23, 79, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        // Keep within bounds
        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = '#35c3e9';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.current.length; j++) {
          const other = particles.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = '#35c3e9';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animationId.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`animated-background ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        ...style
      }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;