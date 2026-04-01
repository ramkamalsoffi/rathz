"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FlowBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const beamsRef = useRef<THREE.Group | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 100;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Particles (Cylinder/Tunnel) ---
    const particleCount = 4000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color1 = new THREE.Color("#0545B1"); // Brand Blue
    const color2 = new THREE.Color("#7402B1"); // Brand Purple
    const color3 = new THREE.Color("#ffffff"); // white

    for (let i = 0; i < particleCount; i++) {
      // Create a large cylinder/tunnel effect
      const angle = Math.random() * Math.PI * 2;
      const radius = 50 + Math.random() * 80;
      const z = (Math.random() - 0.5) * 1500;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = z;

      // Color variation
      const mixedColor = color1.clone().lerp(color2, Math.random());
      if (Math.random() > 0.8) mixedColor.lerp(color3, 0.5);
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 2 + 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // --- Light Beams ---
    const beams = new THREE.Group();
    const beamCount = 12;
    for (let i = 0; i < beamCount; i++) {
        const h = 400 + Math.random() * 600;
        const beamGeo = new THREE.CylinderGeometry(0.1, 0.1, h, 8);
        const beamMat = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.5 ? color1 : color2,
            transparent: true,
            opacity: 0.1 + Math.random() * 0.1,
            blending: THREE.AdditiveBlending
        });
        const beam = new THREE.Mesh(beamGeo, beamMat);
        
        const angle = Math.random() * Math.PI * 2;
        const radius = 60 + Math.random() * 40;
        beam.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, (Math.random() - 0.5) * 1000);
        beam.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.2;
        beam.rotation.z = (Math.random() - 0.5) * 0.2;
        beams.add(beam);
    }
    scene.add(beams);
    beamsRef.current = beams;

    // --- GSAP Scroll Animation ---
    // We animate the camera's Z position and a slight rotation based on scroll
    gsap.to(camera.position, {
      z: -600, // Movement through the tunnel
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth smoothing
      }
    });

    gsap.to(scene.rotation, {
      z: Math.PI * 0.5, // Slow rotation
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      }
    });

    // --- Animation Loop ---
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      
      // Auto-drift particles
      if (pointsRef.current) {
        pointsRef.current.rotation.z += 0.0005;
      }
      
      // Drift beams
      if (beamsRef.current) {
        beamsRef.current.children.forEach((beam, i) => {
            beam.position.z += 0.2;
            if (beam.position.z > 800) beam.position.z = -800;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      renderer.dispose();
      // Clean up DOM
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 bg-[#020b1e] pointer-events-none"
      style={{ 
        isolation: 'isolate',
        background: 'radial-gradient(circle at 50% 50%, #05142b 0%, #020b1e 100%)'
      }}
    />
  );
};

export default FlowBackground;
