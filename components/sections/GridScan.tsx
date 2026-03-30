"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GridScanProps {
  sensitivity?: number;
  lineThickness?: number;
  linesColor?: string;
  gridScale?: number;
  scanColor?: string;
  scanOpacity?: number;
  enablePost?: boolean;
  bloomIntensity?: number;
  chromaticAberration?: number;
  noiseIntensity?: number;
}

const GridScan: React.FC<GridScanProps> = ({
  linesColor = "#392e4e",
  scanColor = "#FF9FFC",
  scanOpacity = 0.4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 15, 25);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const size = 200;
    const divisions = 40;
    const gridHelper = new THREE.GridHelper(size, divisions, new THREE.Color(linesColor), new THREE.Color(linesColor));
    scene.add(gridHelper);

    const scanPlaneGeometry = new THREE.PlaneGeometry(size, 4);
    const scanPlaneMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(scanColor),
      transparent: true,
      opacity: scanOpacity,
      side: THREE.DoubleSide,
    });
    const scanLine = new THREE.Mesh(scanPlaneGeometry, scanPlaneMaterial);
    scanLine.rotation.x = -Math.PI / 2;
    scene.add(scanLine);

    let scanPos = -size / 2;
    const animate = () => {
      requestAnimationFrame(animate);
      scanPos += 0.8;
      if (scanPos > size / 2) scanPos = -size / 2;
      scanLine.position.z = scanPos;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [linesColor, scanColor, scanOpacity]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default GridScan;
