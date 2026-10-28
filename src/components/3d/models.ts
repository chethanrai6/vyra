import * as THREE from 'three';
import {
  createMarbleTexture,
  createSerumLabelTexture,
  createJarLabelTexture,
  createTubeLabelTexture
} from './textures';

export interface ProductSceneObjects {
  platformGroup: THREE.Group;
  serumGroup: THREE.Group;
  jarGroup: THREE.Group;
  jarLid: THREE.Mesh;
  tubeGroup: THREE.Group;
  ribbonMesh: THREE.Mesh;
  ribbonCurve: THREE.CatmullRomCurve3;
  spheres: THREE.Mesh[];
  petals: THREE.Mesh[];
  particles: THREE.Points;
  materials: THREE.Material[];
}

export function createProductUniverse(): ProductSceneObjects {
  const materials: THREE.Material[] = [];

  // ==========================================
  // SHARED LUXURY MATERIALS
  // ==========================================
  
  // Rose gold polished metal
  const roseGoldMetal = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#E0A58F'),
    metalness: 0.98,
    roughness: 0.12,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    reflectivity: 0.95
  });
  materials.push(roseGoldMetal);

  // Luxury Borosilicate Glass
  const luxuryGlass = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#FFF8F2'),
    transmission: 0.95,
    roughness: 0.04,
    ior: 1.52,
    reflectivity: 0.98,
    thickness: 1.2,
    specularIntensity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    transparent: true,
    opacity: 0.96
  });
  materials.push(luxuryGlass);

  // Translucent golden-champagne hydrating serum fluid
  const serumFluidMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#FBE6CE'),
    transmission: 0.75,
    roughness: 0.1,
    ior: 1.34,
    transparent: true,
    opacity: 0.88,
    thickness: 0.8
  });
  materials.push(serumFluidMaterial);

  // Soft matte blush-cream dropper bulb
  const dropperBulbMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#F5E5DC'),
    roughness: 0.55,
    metalness: 0.05
  });
  materials.push(dropperBulbMaterial);

  // ==========================================
  // 1. MARBLE PLATFORM
  // ==========================================
  const platformGroup = new THREE.Group();

  const marbleTexture = createMarbleTexture();
  const marbleMaterial = new THREE.MeshStandardMaterial({
    map: marbleTexture,
    color: new THREE.Color('#FAF5EE'),
    roughness: 0.22,
    metalness: 0.04
  });
  materials.push(marbleMaterial);

  // Circular podium
  const platformGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.45, 64);
  const platformMesh = new THREE.Mesh(platformGeo, marbleMaterial);
  platformMesh.position.y = -1.8;
  platformMesh.receiveShadow = true;
  platformGroup.add(platformMesh);

  // Bevel ring top
  const bevelGeo = new THREE.TorusGeometry(4.2, 0.08, 16, 64);
  const bevelMesh = new THREE.Mesh(bevelGeo, roseGoldMetal);
  bevelMesh.rotation.x = Math.PI / 2;
  bevelMesh.position.y = -1.58;
  platformGroup.add(bevelMesh);

  // Soft shadow plane beneath
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 256;
  shadowCanvas.height = 256;
  const sCtx = shadowCanvas.getContext('2d');
  if (sCtx) {
    const sGrad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 120);
    sGrad.addColorStop(0, 'rgba(45, 30, 22, 0.35)');
    sGrad.addColorStop(0.6, 'rgba(45, 30, 22, 0.12)');
    sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 256, 256);
  }
  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.85 })
  );
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -2.05;
  platformGroup.add(shadowPlane);

  // ==========================================
  // 2. LUXURY SERUM BOTTLE
  // ==========================================
  const serumGroup = new THREE.Group();

  // Glass outer bottle body (cylinder with thick luxury bottom)
  const bottleOuterGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.4, 48);
  const bottleOuter = new THREE.Mesh(bottleOuterGeo, luxuryGlass);
  bottleOuter.castShadow = true;
  serumGroup.add(bottleOuter);

  // Thick base glass (solid glass cylinder at bottom)
  const baseGlassGeo = new THREE.CylinderGeometry(0.84, 0.84, 0.35, 48);
  const baseGlass = new THREE.Mesh(baseGlassGeo, luxuryGlass);
  baseGlass.position.y = -1.05;
  serumGroup.add(baseGlass);

  // Rounded shoulder
  const shoulderGeo = new THREE.SphereGeometry(0.85, 32, 16, 0, Math.PI * 2, 0, Math.PI / 3);
  const shoulder = new THREE.Mesh(shoulderGeo, luxuryGlass);
  shoulder.position.y = 1.15;
  serumGroup.add(shoulder);

  // Bottle neck
  const neckGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.4, 32);
  const neck = new THREE.Mesh(neckGeo, luxuryGlass);
  neck.position.y = 1.5;
  serumGroup.add(neck);

  // Inner serum liquid cylinder
  const liquidGeo = new THREE.CylinderGeometry(0.72, 0.72, 1.8, 32);
  const liquidMesh = new THREE.Mesh(liquidGeo, serumFluidMaterial);
  liquidMesh.position.y = -0.15;
  serumGroup.add(liquidMesh);

  // Dropper glass tube inside liquid
  const pipetteGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.3, 16);
  const pipetteMesh = new THREE.Mesh(pipetteGeo, luxuryGlass);
  pipetteMesh.position.y = 0.5;
  serumGroup.add(pipetteMesh);

  // Rose-gold dropper metallic collar
  const collarGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.5, 32);
  const collarMesh = new THREE.Mesh(collarGeo, roseGoldMetal);
  collarMesh.position.y = 1.8;
  collarMesh.castShadow = true;
  serumGroup.add(collarMesh);

  // Knurled ridge ring on collar
  const ridgeGeo = new THREE.TorusGeometry(0.47, 0.03, 12, 32);
  const ridgeMesh = new THREE.Mesh(ridgeGeo, roseGoldMetal);
  ridgeMesh.rotation.x = Math.PI / 2;
  ridgeMesh.position.y = 1.75;
  serumGroup.add(ridgeMesh);

  // Soft blush-cream dropper rubber bulb
  const bulbPoints: THREE.Vector2[] = [];
  for (let i = 0; i <= 16; i++) {
    const t = i / 16;
    const r = Math.sin(t * Math.PI) * 0.38 + 0.12 * (1 - t);
    const y = t * 0.7;
    bulbPoints.push(new THREE.Vector2(r, y));
  }
  const bulbGeo = new THREE.LatheGeometry(bulbPoints, 32);
  const bulbMesh = new THREE.Mesh(bulbGeo, dropperBulbMaterial);
  bulbMesh.position.y = 2.05;
  bulbMesh.castShadow = true;
  serumGroup.add(bulbMesh);

  // Brand Label wrapped on bottle
  const serumLabelTex = createSerumLabelTexture();
  const labelGeo = new THREE.CylinderGeometry(0.855, 0.855, 1.6, 48, 1, true, -Math.PI / 2.6, Math.PI / 1.3);
  const labelMat = new THREE.MeshBasicMaterial({
    map: serumLabelTex,
    transparent: true,
    opacity: 0.98,
    side: THREE.DoubleSide
  });
  materials.push(labelMat);
  const labelMesh = new THREE.Mesh(labelGeo, labelMat);
  labelMesh.position.y = -0.1;
  serumGroup.add(labelMesh);

  // Position serum bottle (center-left hero focus)
  serumGroup.position.set(-0.3, 0.2, 0.4);
  serumGroup.scale.set(1.08, 1.08, 1.08);

  // ==========================================
  // 3. COSMETIC CREAM JAR WITH FLOATING METALLIC LID
  // ==========================================
  const jarGroup = new THREE.Group();

  // Opalescent cream jar base
  const jarBaseMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#FAF3EB'),
    roughness: 0.15,
    metalness: 0.06,
    transmission: 0.35,
    ior: 1.48
  });
  materials.push(jarBaseMat);

  const jarBaseGeo = new THREE.CylinderGeometry(1.2, 1.15, 1.1, 48);
  const jarBase = new THREE.Mesh(jarBaseGeo, jarBaseMat);
  jarBase.castShadow = true;
  jarGroup.add(jarBase);

  // Rounded base rim
  const jarRimGeo = new THREE.TorusGeometry(1.15, 0.08, 16, 48);
  const jarRim = new THREE.Mesh(jarRimGeo, roseGoldMetal);
  jarRim.rotation.x = Math.PI / 2;
  jarRim.position.y = -0.52;
  jarGroup.add(jarRim);

  // Cream swirl inside the jar
  const creamMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#FFF9F3'),
    roughness: 0.4,
    metalness: 0.02
  });
  materials.push(creamMat);

  // Procedural swirl geometry
  const creamPoints: THREE.Vector2[] = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const r = (1 - t * 0.7) * 0.95;
    const y = Math.sin(t * Math.PI) * 0.25 + t * 0.2;
    creamPoints.push(new THREE.Vector2(r, y));
  }
  const creamGeo = new THREE.LatheGeometry(creamPoints, 32);
  const creamMesh = new THREE.Mesh(creamGeo, creamMat);
  creamMesh.position.y = 0.52;
  jarGroup.add(creamMesh);

  // Jar front brand label
  const jarLabelTex = createJarLabelTexture();
  const jarLabelGeo = new THREE.CylinderGeometry(1.205, 1.155, 0.7, 48, 1, true, -Math.PI / 3, Math.PI / 1.5);
  const jarLabelMat = new THREE.MeshBasicMaterial({
    map: jarLabelTex,
    transparent: true,
    opacity: 0.95,
    side: THREE.DoubleSide
  });
  materials.push(jarLabelMat);
  const jarLabelMesh = new THREE.Mesh(jarLabelGeo, jarLabelMat);
  jarLabelMesh.position.y = 0.05;
  jarGroup.add(jarLabelMesh);

  // Metallic Lid (ANIMATED: lifts and floats)
  const lidGeo = new THREE.CylinderGeometry(1.28, 1.28, 0.38, 48);
  const jarLid = new THREE.Mesh(lidGeo, roseGoldMetal);
  jarLid.position.y = 0.75; // Initial rest position (will animate upwards)
  jarLid.castShadow = true;

  // Star detail engraved on lid top
  const starGeo = new THREE.RingGeometry(0.1, 0.35, 4);
  const starMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FAF5EE'), side: THREE.DoubleSide });
  materials.push(starMat);
  const starMesh = new THREE.Mesh(starGeo, starMat);
  starMesh.rotation.x = -Math.PI / 2;
  starMesh.position.y = 0.2;
  jarLid.add(starMesh);

  jarGroup.add(jarLid);

  // Position Jar (to the right of the serum bottle)
  jarGroup.position.set(1.9, -0.65, 0.8);
  jarGroup.scale.set(0.92, 0.92, 0.92);

  // ==========================================
  // 4. COSMETIC SKINCARE TUBE
  // ==========================================
  const tubeGroup = new THREE.Group();

  // Pearlescent cream tube material
  const tubeMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#F7EDE5'),
    roughness: 0.25,
    metalness: 0.1,
    clearcoat: 0.3
  });
  materials.push(tubeMat);

  // Tapered tube body
  const tubeBodyGeo = new THREE.CylinderGeometry(0.48, 0.35, 2.2, 32);
  const tubeBody = new THREE.Mesh(tubeBodyGeo, tubeMat);
  tubeBody.castShadow = true;
  tubeGroup.add(tubeBody);

  // Crimped top edge
  const crimpGeo = new THREE.BoxGeometry(0.96, 0.12, 0.12);
  const crimpMesh = new THREE.Mesh(crimpGeo, roseGoldMetal);
  crimpMesh.position.y = 1.12;
  tubeGroup.add(crimpMesh);

  // Rose-gold octagonal/cylindrical cap
  const capGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.5, 16);
  const capMesh = new THREE.Mesh(capGeo, roseGoldMetal);
  capMesh.position.y = -1.25;
  capMesh.castShadow = true;
  tubeGroup.add(capMesh);

  // Tube brand label
  const tubeLabelTex = createTubeLabelTexture();
  const tubeLabelGeo = new THREE.CylinderGeometry(0.485, 0.355, 1.4, 32, 1, true, -Math.PI / 2.5, Math.PI / 1.25);
  const tubeLabelMat = new THREE.MeshBasicMaterial({
    map: tubeLabelTex,
    transparent: true,
    opacity: 0.95,
    side: THREE.DoubleSide
  });
  materials.push(tubeLabelMat);
  const tubeLabelMesh = new THREE.Mesh(tubeLabelGeo, tubeLabelMat);
  tubeLabelMesh.position.y = 0.05;
  tubeGroup.add(tubeLabelMesh);

  // Position tube (floating diagonally on the left/background)
  tubeGroup.position.set(-1.9, 0.35, -0.4);
  tubeGroup.rotation.z = -0.38;
  tubeGroup.rotation.y = 0.45;
  tubeGroup.rotation.x = 0.2;
  tubeGroup.scale.set(0.88, 0.88, 0.88);

  // ==========================================
  // 5. FLOWING TRANSLUCENT CHAMPAGNE RIBBON
  // ==========================================
  // Generate smooth 3D spline curve weaving through and around products
  const ribbonCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-3.8, -1.2, -1.5),
    new THREE.Vector3(-2.4, 0.4, -0.8),
    new THREE.Vector3(-1.0, 1.6, 0.2),
    new THREE.Vector3(0.5, 0.8, 1.4),
    new THREE.Vector3(2.2, 0.1, 1.2),
    new THREE.Vector3(3.4, -0.5, -0.2),
    new THREE.Vector3(2.4, -1.3, -1.8),
    new THREE.Vector3(0.2, -1.5, -1.2),
    new THREE.Vector3(-1.8, -1.4, -0.5)
  ]);
  ribbonCurve.closed = true;

  // Ribbon material: translucent champagne silk
  const ribbonMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#FBE4D2'),
    transmission: 0.65,
    roughness: 0.22,
    ior: 1.38,
    sheen: 1.0,
    sheenColor: new THREE.Color('#FFDFC8'),
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.88
  });
  materials.push(ribbonMat);

  // Extrude flat ribbon along spline
  const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 128, 0.22, 16, true);
  const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
  ribbonMesh.castShadow = true;

  // ==========================================
  // 6. FLOATING GLASS SPHERES (VARIOUS SIZES & DEPTHS)
  // ==========================================
  const spheres: THREE.Mesh[] = [];
  const sphereConfigs = [
    { pos: [2.5, 1.8, -0.6], r: 0.58 }, // Upper right background
    { pos: [-2.6, 1.9, 0.3], r: 0.42 }, // Upper left midground
    { pos: [-1.4, -0.8, 1.8], r: 0.34 }, // Foreground bottom left
    { pos: [1.2, 1.5, 1.6], r: 0.38 }, // Foreground floating right
    { pos: [3.2, -0.2, 1.1], r: 0.48 }, // Midground right
    { pos: [-3.2, -0.6, -1.0], r: 0.36 }, // Background left
    { pos: ([-0.2, 2.5, -1.2]), r: 0.28 } // High background
  ];

  sphereConfigs.forEach((cfg, idx) => {
    const sGeo = new THREE.SphereGeometry(cfg.r, 32, 32);
    const sMesh = new THREE.Mesh(sGeo, luxuryGlass);
    sMesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
    sMesh.castShadow = true;
    sMesh.userData = {
      baseY: cfg.pos[1],
      speed: 0.8 + idx * 0.25,
      phase: idx * 1.1,
      orbitR: 0.15 + (idx % 3) * 0.1
    };
    spheres.push(sMesh);
  });

  // ==========================================
  // 7. FLOATING PEACH PETALS
  // ==========================================
  const petals: THREE.Mesh[] = [];
  const petalMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#F7D5C4'),
    roughness: 0.45,
    metalness: 0.05,
    side: THREE.DoubleSide
  });
  materials.push(petalMat);

  // Petal geometry (curved shell)
  const petalGeo = new THREE.SphereGeometry(0.24, 16, 12, 0, Math.PI * 1.1, 0, Math.PI / 1.8);

  for (let i = 0; i < 9; i++) {
    const pMesh = new THREE.Mesh(petalGeo, petalMat);
    const angle = (i / 9) * Math.PI * 2;
    const rad = 2.2 + Math.random() * 1.5;
    const y = (Math.random() - 0.5) * 3.5;
    pMesh.position.set(Math.cos(angle) * rad, y, Math.sin(angle) * rad);
    pMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    pMesh.scale.set(0.8 + Math.random() * 0.6, 0.8 + Math.random() * 0.6, 0.8 + Math.random() * 0.6);
    pMesh.userData = {
      baseY: y,
      rotSpeedX: 0.01 + Math.random() * 0.015,
      rotSpeedY: 0.012 + Math.random() * 0.015,
      orbitSpeed: 0.3 + Math.random() * 0.4,
      rad: rad,
      angle: angle
    };
    petals.push(pMesh);
  }

  // ==========================================
  // 8. GLOWING MICRO PARTICLES & LIGHT DROPLETS
  // ==========================================
  const particleCount = 48;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 8;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  // Particle canvas texture (soft glowing circle)
  const pCanvas = document.createElement('canvas');
  pCanvas.width = 64;
  pCanvas.height = 64;
  const pCtx = pCanvas.getContext('2d');
  if (pCtx) {
    const pGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 30);
    pGrad.addColorStop(0, 'rgba(255, 245, 235, 1)');
    pGrad.addColorStop(0.3, 'rgba(235, 185, 160, 0.8)');
    pGrad.addColorStop(1, 'rgba(235, 185, 160, 0)');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 64, 64);
  }
  const pTex = new THREE.CanvasTexture(pCanvas);
  const pMat = new THREE.PointsMaterial({
    map: pTex,
    size: 0.16,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  materials.push(pMat);

  const particles = new THREE.Points(pGeo, pMat);

  return {
    platformGroup,
    serumGroup,
    jarGroup,
    jarLid,
    tubeGroup,
    ribbonMesh,
    ribbonCurve,
    spheres,
    petals,
    particles,
    materials
  };
}
