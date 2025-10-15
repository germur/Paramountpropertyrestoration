import { useEffect, useRef } from 'react';

export default function ModernContactAnimation({ serviceType = 'contact', isActive = true }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

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

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Particle class with modern design
    class ModernParticle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 4 + 2;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.baseOpacity = this.opacity;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.color = this.getRandomColor();
        this.trail = [];
        this.maxTrailLength = 5;
      }

      getRandomColor() {
        const colors = [
          '#35c3e9', // Primary blue
          '#2a9fd1', // Primary dark
          '#ef4444', // Danger red
          '#10b981', // Success green
          '#f59e0b'  // Accent orange
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Store previous position for trail
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }

        // Mouse attraction effect
        const mouse = mouseRef.current;
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx += (dx / distance) * force * 0.01;
          this.vy += (dy / distance) * force * 0.01;
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Add some velocity damping
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Wrap around edges with smooth transition
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Pulse effect
        this.opacity = this.baseOpacity + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.3;
      }

      draw() {
        // Draw trail
        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * this.opacity * 0.3;
          const trailSize = this.size * (index / this.trail.length) * 0.5;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = this.color + Math.floor(trailOpacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
        });

        // Draw main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, this.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add subtle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.floor(this.opacity * 128).toString(16).padStart(2, '0');
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    const particleCount = 35;
    particles.length = 0;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new ModernParticle());
    }

    // Floating geometric shapes for visual interest
    const createFloatingShapes = () => {
      const time = Date.now() * 0.001;

      // Floating circles
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * (0.2 + (i * 0.3)) + Math.sin(time + i) * 100;
        const y = canvas.height * (0.3 + (i * 0.2)) + Math.cos(time * 0.7 + i) * 80;
        const size = 40 + Math.sin(time * 2 + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.strokeStyle = '#35c3e9' + '20';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(x, y, size * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = '#35c3e9' + '08';
        ctx.fill();
      }

      // Floating triangles
      for (let i = 0; i < 2; i++) {
        const x = canvas.width * (0.7 + (i * 0.2)) + Math.sin(time * 0.5 + i) * 60;
        const y = canvas.height * (0.6 + (i * 0.2)) + Math.cos(time * 0.8 + i) * 50;
        const size = 25 + Math.sin(time * 3 + i) * 5;
        
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size * 0.866, y + size * 0.5);
        ctx.lineTo(x + size * 0.866, y + size * 0.5);
        ctx.closePath();
        ctx.strokeStyle = '#ef4444' + '30';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = '#ef4444' + '08';
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e293b00');
      gradient.addColorStop(0.5, '#11182708');
      gradient.addColorStop(1, '#1e293b00');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating shapes
      createFloatingShapes();

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
            const opacity = (120 - distance) / 120 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(53, 195, 233, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Add interactive ripple effect at mouse position
      if (mouseRef.current.x && mouseRef.current.y) {
        const time = Date.now() * 0.005;
        const rippleSize = 30 + Math.sin(time * 4) * 10;
        
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, rippleSize, 0, Math.PI * 2);
        ctx.strokeStyle = '#35c3e9' + '40';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, rippleSize * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = '#35c3e9' + '20';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
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
        pointerEvents: 'auto',
        opacity: 0.9
      }}
      className="modern-contact-animation-canvas"
    />
  );
}