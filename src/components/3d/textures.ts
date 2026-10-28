import * as THREE from 'three';

// Create procedural luxury marble texture for platform
export function createMarbleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Base warm ivory/cream
    const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
    grad.addColorStop(0, '#FAF5EE');
    grad.addColorStop(0.5, '#F4ECE0');
    grad.addColorStop(1, '#EFE4D4');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle marble veins
    ctx.strokeStyle = 'rgba(185, 130, 107, 0.12)';
    ctx.lineWidth = 3;
    ctx.filter = 'blur(4px)';

    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      let x = Math.random() * 1024;
      let y = 0;
      ctx.moveTo(x, y);

      while (y < 1024) {
        y += 40 + Math.random() * 80;
        x += (Math.random() - 0.48) * 90;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Finer delicate veins
    ctx.strokeStyle = 'rgba(140, 100, 80, 0.08)';
    ctx.lineWidth = 1.5;
    ctx.filter = 'blur(1.5px)';

    for (let i = 0; i < 9; i++) {
      ctx.beginPath();
      let x = 0;
      let y = Math.random() * 1024;
      ctx.moveTo(x, y);

      while (x < 1024) {
        x += 50 + Math.random() * 90;
        y += (Math.random() - 0.48) * 100;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Create luxury serum bottle label texture
export function createSerumLabelTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Clear transparent
    ctx.clearRect(0, 0, 512, 512);

    // Subtle frosted label backing rectangle
    ctx.fillStyle = 'rgba(255, 252, 248, 0.88)';
    ctx.roundRect(64, 96, 384, 320, 16);
    ctx.fill();

    // Subtle gold border
    ctx.strokeStyle = 'rgba(185, 130, 107, 0.45)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Brand text
    ctx.fillStyle = '#171513';
    ctx.textAlign = 'center';

    // VYRA✦
    ctx.font = 'bold 44px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('VYRA', 256, 175);

    ctx.font = '24px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#B9826B';
    ctx.fillText('✦', 345, 155);

    // Subtitle
    ctx.fillStyle = '#5A4035';
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('UGC STUDIO', 256, 215);

    // Divider line
    ctx.strokeStyle = '#B9826B';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(180, 240);
    ctx.lineTo(332, 240);
    ctx.stroke();

    // Product name
    ctx.fillStyle = '#171513';
    ctx.font = '500 20px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('LUMINOUS BOTANICAL', 256, 280);
    ctx.fillText('SERUM', 256, 308);

    // Small specs
    ctx.fillStyle = '#8C6C5C';
    ctx.font = '11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('BARRIER REPAIR • 30ML / 1.0 FL. OZ.', 256, 360);
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Create cosmetic cream jar label texture
export function createJarLabelTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, 512, 256);

    ctx.fillStyle = '#171513';
    ctx.textAlign = 'center';

    ctx.font = 'bold 36px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('VYRA', 256, 110);

    ctx.font = '20px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#B9826B';
    ctx.fillText('✦', 325, 95);

    ctx.fillStyle = '#5A4035';
    ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CRÈME HYDRATANTE', 256, 145);

    ctx.fillStyle = '#8C6C5C';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('50 ML • 1.7 FL. OZ.', 256, 175);
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Create cosmetic tube label texture
export function createTubeLabelTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, 256, 512);

    ctx.fillStyle = '#171513';
    ctx.textAlign = 'center';

    ctx.font = 'bold 32px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('VYRA', 128, 220);

    ctx.font = '18px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#B9826B';
    ctx.fillText('✦', 190, 208);

    ctx.fillStyle = '#5A4035';
    ctx.font = '600 10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('RESTORATIVE BALM', 128, 255);

    ctx.fillStyle = '#8C6C5C';
    ctx.font = '9px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('INTENSIVE NOURISHMENT', 128, 280);
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Create studio gradient environment map for metallic & glass reflections
export function createStudioEnvMap(renderer: THREE.WebGLRenderer): THREE.WebGLRenderTarget {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#FFFFFF'); // Soft overhead studio softbox
    grad.addColorStop(0.35, '#F7ECE1'); // Warm champagne horizon
    grad.addColorStop(0.65, '#E8D5C4'); // Rose-gold reflective ground
    grad.addColorStop(1, '#5A4035'); // Deep luxury tone
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Studio softbox highlights
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillRect(80, 40, 350, 120);

    // Rim light softbox
    ctx.fillStyle = 'rgba(255, 220, 200, 0.7)';
    ctx.fillRect(380, 180, 90, 200);
  }

  const texture = new THREE.CanvasTexture(canvas);
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  const renderTarget = pmremGenerator.fromEquirectangular(texture);
  texture.dispose();
  pmremGenerator.dispose();

  return renderTarget;
}
