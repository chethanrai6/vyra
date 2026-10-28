import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { createProductUniverse } from './3d/models';
import { createStudioEnvMap } from './3d/textures';

interface ProductScene3DProps {
  onProductClick?: (productName: string) => void;
}

export const ProductScene3D: React.FC<ProductScene3DProps> = ({ onProductClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFocus, setActiveFocus] = useState<'all' | 'serum' | 'jar' | 'tube'>('all');
  const [isInteractiveHovered, setIsInteractiveHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // References for camera tweening
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<{ setFocus: (focus: 'all' | 'serum' | 'jar' | 'tube') => void } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(38, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.8, 8.8);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Studio Environment Reflection Map
    const envRenderTarget = createStudioEnvMap(renderer);
    scene.environment = envRenderTarget.texture;

    // 5. Studio Lighting Rig
    // Warm Key Light
    const keyLight = new THREE.DirectionalLight('#FFF5ED', 2.8);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    scene.add(keyLight);

    // Rose-Gold Rim Light (From Back Right)
    const rimLight = new THREE.DirectionalLight('#ECA48A', 3.2);
    rimLight.position.set(5, 3, -4);
    scene.add(rimLight);

    // Soft Champagne Fill Light (From Left)
    const fillLight = new THREE.DirectionalLight('#F9EFE6', 1.4);
    fillLight.position.set(-5, 2, 4);
    scene.add(fillLight);

    // Overhead Specular Softbox
    const topLight = new THREE.PointLight('#FFFFFF', 1.8, 15);
    topLight.position.set(0, 7, 1);
    scene.add(topLight);

    // Subtle Ambient
    const ambientLight = new THREE.AmbientLight('#FAF2EC', 0.65);
    scene.add(ambientLight);

    // 6. Build 3D Product Universe
    const {
      platformGroup,
      serumGroup,
      jarGroup,
      jarLid,
      tubeGroup,
      ribbonMesh,
      spheres,
      petals,
      particles,
      materials
    } = createProductUniverse();

    // Scene master root
    const worldGroup = new THREE.Group();
    worldGroup.add(platformGroup);
    worldGroup.add(serumGroup);
    worldGroup.add(jarGroup);
    worldGroup.add(tubeGroup);
    worldGroup.add(ribbonMesh);
    spheres.forEach((s) => worldGroup.add(s));
    petals.forEach((p) => worldGroup.add(p));
    worldGroup.add(particles);
    scene.add(worldGroup);

    // 7. Initial Entrance Animation (GSAP)
    platformGroup.position.y = -3.5;
    platformGroup.scale.set(0.6, 0.6, 0.6);

    serumGroup.position.y = -3.2;
    serumGroup.rotation.y = -Math.PI / 2;

    jarGroup.position.y = -3.5;
    jarLid.position.y = 0.75;

    tubeGroup.position.y = -4.0;
    ribbonMesh.scale.set(0.1, 0.1, 0.1);

    const tl = gsap.timeline({
      onComplete: () => setIsLoaded(true)
    });

    // Camera push-in
    tl.to(camera.position, {
      x: 0,
      y: 0.35,
      z: 7.2,
      duration: 2.2,
      ease: 'power3.out'
    });

    // Platform emerges
    tl.to(
      platformGroup.position,
      {
        y: 0,
        duration: 1.8,
        ease: 'power3.out'
      },
      0.1
    );
    tl.to(
      platformGroup.scale,
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.8,
        ease: 'power3.out'
      },
      0.1
    );

    // Serum bottle rises and tilts
    tl.to(
      serumGroup.position,
      {
        y: 0.2,
        duration: 2.0,
        ease: 'elastic.out(1, 0.85)'
      },
      0.3
    );
    tl.to(
      serumGroup.rotation,
      {
        y: 0.15,
        duration: 2.0,
        ease: 'power2.out'
      },
      0.3
    );

    // Cream jar rises & lid floats up smoothly revealing cream swirl
    tl.to(
      jarGroup.position,
      {
        y: -0.65,
        duration: 1.8,
        ease: 'power3.out'
      },
      0.5
    );
    tl.to(
      jarLid.position,
      {
        y: 1.65, // Hovering lid
        duration: 2.2,
        ease: 'power2.out'
      },
      0.9
    );
    tl.to(
      jarLid.rotation,
      {
        y: Math.PI * 0.4,
        z: 0.12,
        duration: 2.2,
        ease: 'power2.out'
      },
      0.9
    );

    // Cosmetic tube enters
    tl.to(
      tubeGroup.position,
      {
        y: 0.35,
        duration: 1.8,
        ease: 'power3.out'
      },
      0.6
    );

    // Ribbons unfurl
    tl.to(
      ribbonMesh.scale,
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 2.2,
        ease: 'power2.out'
      },
      0.5
    );

    // 8. Camera Focus Mode Controller
    controlsRef.current = {
      setFocus: (focus: 'all' | 'serum' | 'jar' | 'tube') => {
        let targetPos = { x: 0, y: 0.35, z: 7.2 };
        if (focus === 'serum') {
          targetPos = { x: -0.3, y: 0.3, z: 4.8 };
        } else if (focus === 'jar') {
          targetPos = { x: 1.8, y: -0.3, z: 4.6 };
        } else if (focus === 'tube') {
          targetPos = { x: -1.8, y: 0.4, z: 4.6 };
        }

        gsap.to(camera.position, {
          x: targetPos.x,
          y: targetPos.y,
          z: targetPos.z,
          duration: 1.4,
          ease: 'power2.inOut'
        });
      }
    };

    // 9. Mouse Parallax & Interaction Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouse.targetX = x;
      mouse.targetY = y;
      mouseVector.set(x, y);

      // Raycast test for product hovering
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects([serumGroup, jarGroup, tubeGroup], true);
      setIsInteractiveHovered(intersects.length > 0);
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });

    // Click on 3D products
    const onPointerDown = () => {
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects([serumGroup, jarGroup, tubeGroup], true);
      if (intersects.length > 0 && onProductClick) {
        let parent = intersects[0].object.parent;
        while (parent && parent !== worldGroup) {
          if (parent === serumGroup) {
            onProductClick('Luminous Botanical Serum');
            break;
          }
          if (parent === jarGroup) {
            onProductClick('Nourishing Crème Hydratante');
            break;
          }
          if (parent === tubeGroup) {
            onProductClick('Restorative Skin Balm');
            break;
          }
          parent = parent.parent;
        }
      }
    };

    container.addEventListener('click', onPointerDown);

    // Scroll parallax tracking
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // 10. Main Animation Loop (Blender-Style Luxury Motion)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera gentle floating & parallax
      const scrollOffset = Math.min(scrollY / 600, 1.2);
      if (activeFocus === 'all') {
        camera.position.x = mouse.x * 0.65;
        camera.position.y = 0.35 + mouse.y * 0.45 - scrollOffset * 0.4;
        camera.lookAt(0, -0.15 - scrollOffset * 0.2, 0);
      }

      // --- Product 1: Serum Bottle Levitation & Tilting ---
      const serumLev = Math.sin(t * 1.1) * 0.09;
      serumGroup.position.y = 0.2 + serumLev;
      serumGroup.rotation.y = 0.15 + Math.sin(t * 0.6) * 0.14 + mouse.x * 0.15;
      serumGroup.rotation.z = Math.cos(t * 0.8) * 0.04 - mouse.x * 0.05;
      serumGroup.rotation.x = Math.sin(t * 0.7) * 0.03 + mouse.y * 0.05;

      // --- Product 2: Cream Jar & Floating Metallic Lid ---
      const jarLev = Math.sin(t * 1.0 + 1.2) * 0.07;
      jarGroup.position.y = -0.65 + jarLev;
      jarGroup.rotation.y = -0.1 + Math.sin(t * 0.45) * 0.12;

      // Lid gentle hover cycle
      jarLid.position.y = 1.45 + Math.sin(t * 1.3) * 0.15;
      jarLid.rotation.y = t * 0.25;
      jarLid.rotation.z = 0.1 + Math.sin(t * 0.9) * 0.06;

      // --- Product 3: Cosmetic Tube Sway ---
      const tubeLev = Math.sin(t * 1.2 + 2.1) * 0.08;
      tubeGroup.position.y = 0.35 + tubeLev;
      tubeGroup.rotation.y = 0.45 + Math.sin(t * 0.5) * 0.1;
      tubeGroup.rotation.x = 0.2 + Math.cos(t * 0.6) * 0.05;

      // --- Flowing Translucent Champagne Ribbons ---
      ribbonMesh.rotation.y = t * 0.12;
      ribbonMesh.rotation.x = Math.sin(t * 0.3) * 0.05;
      ribbonMesh.position.y = Math.sin(t * 0.7) * 0.08;

      // --- Floating Glass Spheres Parallax ---
      spheres.forEach((s) => {
        const u = s.userData;
        s.position.y = u.baseY + Math.sin(t * u.speed + u.phase) * 0.18;
        s.position.x += Math.sin(t * 0.5 + u.phase) * 0.002;
        s.rotation.y += 0.005;
        s.rotation.x += 0.003;
      });

      // --- Floating Petals Tumbling ---
      petals.forEach((p) => {
        const u = p.userData;
        u.angle += 0.003 * u.orbitSpeed;
        p.position.x = Math.cos(u.angle) * u.rad;
        p.position.z = Math.sin(u.angle) * u.rad;
        p.position.y = u.baseY + Math.sin(t * 0.8 + u.angle) * 0.25;
        p.rotation.x += u.rotSpeedX;
        p.rotation.y += u.rotSpeedY;
      });

      // --- Micro Particles Twinkling ---
      particles.rotation.y = t * 0.04;
      particles.rotation.x = Math.sin(t * 0.03) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('click', onPointerDown);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      // Dispose Three.js resources
      materials.forEach((m) => m.dispose());
      envRenderTarget.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeFocus]);

  const handleFocusChange = (focus: 'all' | 'serum' | 'jar' | 'tube') => {
    setActiveFocus(focus);
    if (controlsRef.current) {
      controlsRef.current.setFocus(focus);
    }
  };

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-[#FAF5EE] via-[#F3EAE2] to-[#EFE4D6] shadow-[0_24px_60px_rgba(90,64,53,0.14)] border border-[#E8D7CA]/90 select-none">
      
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-${isInteractiveHovered ? 'pointer' : 'grab'} transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-85'
        }`}
      />

      {/* Subtle warm luxury background vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#E8D7CA]/10 to-[#5A4035]/10 pointer-events-none" />

      {/* Handwritten Floating Script in Top Right */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-right z-10 pointer-events-none select-none">
        <div className="font-script text-3xl sm:text-4xl text-[#5A4035] font-semibold leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] rotate-[-4deg]">
          Authentic<br />
          Creative<br />
          <span className="text-[#B9826B] underline decoration-[#B9826B]/80 decoration-2 underline-offset-4">
            Impactful
          </span>
        </div>
      </div>

      {/* Product Focus Interactive Switcher Pills (Top Left) */}
      <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 flex items-center gap-1.5 bg-[#FAF7F2]/80 backdrop-blur-md p-1 rounded-full border border-[#E8D7CA]/80 shadow-xs">
        <button
          onClick={() => handleFocusChange('all')}
          className={`text-[10px] sm:text-[11px] font-sans font-medium px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            activeFocus === 'all'
              ? 'bg-[#171513] text-[#FAF7F2] shadow-xs'
              : 'text-[#5A4035] hover:text-[#171513] hover:bg-[#F3EAE2]'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => handleFocusChange('serum')}
          className={`text-[10px] sm:text-[11px] font-sans font-medium px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            activeFocus === 'serum'
              ? 'bg-[#171513] text-[#FAF7F2] shadow-xs'
              : 'text-[#5A4035] hover:text-[#171513] hover:bg-[#F3EAE2]'
          }`}
        >
          Serum
        </button>
        <button
          onClick={() => handleFocusChange('jar')}
          className={`text-[10px] sm:text-[11px] font-sans font-medium px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            activeFocus === 'jar'
              ? 'bg-[#171513] text-[#FAF7F2] shadow-xs'
              : 'text-[#5A4035] hover:text-[#171513] hover:bg-[#F3EAE2]'
          }`}
        >
          Crème Jar
        </button>
        <button
          onClick={() => handleFocusChange('tube')}
          className={`text-[10px] sm:text-[11px] font-sans font-medium px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            activeFocus === 'tube'
              ? 'bg-[#171513] text-[#FAF7F2] shadow-xs'
              : 'text-[#5A4035] hover:text-[#171513] hover:bg-[#F3EAE2]'
          }`}
        >
          Balm Tube
        </button>
      </div>

      {/* Floating 3D Studio Badge & Interactive Hint */}
      <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 flex flex-wrap items-center gap-2">
        <div className="bg-[#FAF7F2]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8D7CA] shadow-sm flex items-center gap-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#B9826B] animate-pulse" />
          <span className="text-[11px] font-sans font-medium tracking-wide text-[#171513]">
            Cinematic 3D Product Universe
          </span>
        </div>

        <div className="hidden sm:inline-flex items-center text-[10px] text-[#5A4035]/70 bg-white/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#E8D7CA]/60 pointer-events-none">
          ✦ Interactive Parallax
        </div>
      </div>

    </div>
  );
};
