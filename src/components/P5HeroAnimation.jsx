import { useEffect, useRef } from 'react';

export default function P5HeroAnimation({ serviceType = 'restoration', isActive = true }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!isActive || typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = particlesRef.current;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.baseOpacity = this.opacity;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulse effect
        this.opacity = this.baseOpacity + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(53, 195, 233, ${this.opacity})`; // Sky blue with opacity
        ctx.fill();
      }
    }

    // Initialize particles based on service type
    const particleCount = serviceType === 'emergency' ? 60 : 40;
    particles.length = 0;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background matching the new style
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(12, 78, 110, 0.8)');
      gradient.addColorStop(1, 'rgba(3, 23, 79, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(53, 195, 233, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Add floating bubbles for water damage services
      if (serviceType.includes('water') || serviceType.includes('flood')) {
        ctx.beginPath();
        const time = Date.now() * 0.001;
        const bubbleX = canvas.width * 0.2 + Math.sin(time) * 50;
        const bubbleY = canvas.height * 0.3 + Math.cos(time * 0.7) * 30;
        ctx.arc(bubbleX, bubbleY, 8 + Math.sin(time * 2) * 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(53, 195, 233, 0.3)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(53, 195, 233, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Add flame-like particles for fire damage services  
      if (serviceType.includes('fire') || serviceType.includes('smoke')) {
        particles.slice(0, 10).forEach((particle, i) => {
          const flameHeight = 15 + Math.sin(Date.now() * 0.01 + i) * 5;
          ctx.beginPath();
          ctx.ellipse(particle.x, particle.y - flameHeight/2, 3, flameHeight/2, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 158, 11, ${particle.opacity * 0.7})`; // Orange flame color
          ctx.fill();
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [serviceType, isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.8
      }}
      className="hero-animation-canvas"
    />
  );
}