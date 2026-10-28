import type { VideoItem, ServiceItem, IndustryItem } from '../types';

export const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: 'skincare-routine',
    title: 'Skincare Routine',
    duration: '0:24',
    category: 'Skincare',
    image: '/images/strip-skincare.jpg',
    creator: 'Elena R. • Lead Creator',
    description: 'A dewy, morning barrier repair routine featuring gentle texture shots, applicator close-ups, and natural morning light.',
    tags: ['Morning Routine', 'Dewy Finish', 'Texture Macro', 'Authentic Voiceover']
  },
  {
    id: 'beauty-review',
    title: 'Beauty Review',
    duration: '0:31',
    category: 'Beauty',
    image: '/images/strip-beauty.jpg',
    creator: 'Maya S. • Beauty Creator',
    description: 'First impression wear-test review highlighting shade payoff, smooth blendability, and unfiltered skin texture.',
    tags: ['First Impressions', 'Lip Swatch', 'Wear Test', 'Direct-to-Camera']
  },
  {
    id: 'fashion-try-on',
    title: 'Fashion Try-On',
    duration: '0:29',
    category: 'Fashion',
    image: '/images/strip-fashion.jpg',
    creator: 'Chloe T. • Styling Specialist',
    description: 'Capsule wardrobe styling session demonstrating 3 effortless transitional looks with dynamic walking angles.',
    tags: ['Capsule Wardrobe', 'Try-On Haul', 'Lookbook', 'Trending Audio']
  },
  {
    id: 'lifestyle-vlog',
    title: 'Lifestyle Vlog',
    duration: '0:44',
    category: 'Lifestyle',
    image: '/images/strip-lifestyle.jpg',
    creator: 'Sophie D. • Lifestyle Creator',
    description: 'Cozy aesthetic "day in the life" segment seamlessly weaving everyday wellness products into a natural weekend routine.',
    tags: ['Day In Life', 'Cozy Living', 'Relatable Pacing', 'Ambient Sound']
  },
  {
    id: 'product-demo',
    title: 'Product Demo',
    duration: '0:35',
    category: 'Product Content',
    image: '/images/strip-product.jpg',
    creator: 'Studio Lab • Macro Unit',
    description: 'Cinematic dropper consistency shot with droplet dispersion, bottle packaging aesthetics, and tactile unboxing.',
    tags: ['Macro Detail', 'Packaging Focus', 'ASMR Texture', 'High Definition']
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'skincare-beauty',
    title: 'Skincare & Beauty',
    description: "Product showcases, routines, reviews and real-life usage content that highlights your brand's benefits.",
    icon: 'Sparkles',
    image: '/images/service-skincare.jpg',
    deliverables: ['3-5 hook variations per concept', 'Raw 4K footage + edited cuts', 'Direct-to-camera voiceovers', 'Macro skin & product texture shots'],
    timeline: '5-7 business days',
    bestFor: 'Serums, moisturizers, cleansers, makeup, SPF, lip products'
  },
  {
    id: 'fashion-styling',
    title: 'Fashion & Styling',
    description: 'Outfit ideas, styling tips, lookbooks and try-on content that bring your collection to life.',
    icon: 'Shirt',
    image: '/images/service-fashion.jpg',
    deliverables: ['Full-length fit check videos', 'Fabric movement & drape clips', 'Multiple styling combinations', 'Vertical 9:16 format ready for TikTok & Reels'],
    timeline: '6-8 business days',
    bestFor: 'Apparel lines, capsule wardrobes, jewelry, footwear, handbags'
  },
  {
    id: 'product-demonstrations',
    title: 'Product Demonstrations',
    description: 'Clear, engaging demonstrations that show how your product works and why it fits into everyday life.',
    icon: 'Droplets',
    image: '/images/service-demo.jpg',
    deliverables: ['Step-by-step usage guide', 'Feature breakdown & pain-point solving', 'Texture & application close-ups', 'Pacing optimized for viewer retention'],
    timeline: '5-7 business days',
    bestFor: 'Beauty tools, hair care devices, wellness supplements, home essentials'
  },
  {
    id: 'lifestyle-everyday-use',
    title: 'Lifestyle & Everyday Use',
    description: 'Natural, relatable content that shows your product in real moments and daily routines.',
    icon: 'Coffee',
    image: '/images/service-lifestyle.jpg',
    deliverables: ['Organic ambient lifestyle setting', 'Relatable storytelling hooks', 'Seamless product integration', 'Authentic aesthetic b-roll'],
    timeline: '5-7 business days',
    bestFor: 'Wellness, home goods, beverages, morning routines, travel essentials'
  },
  {
    id: 'short-form-video-ads',
    title: 'Short-Form Video Ads',
    description: 'Scroll-stopping, platform-ready videos for Reels, TikTok and short-form campaigns.',
    icon: 'Video',
    image: '/images/service-video-ads.jpg',
    deliverables: ['Hook-rate focused first 3 seconds', 'High-converting call to action', 'Native typography & subtitles', 'Optimized for paid Meta & TikTok campaigns'],
    timeline: '4-6 business days',
    bestFor: 'E-commerce direct response ads, seasonal launches, UGC ad creatives'
  },
  {
    id: 'product-photography',
    title: 'Product Photography',
    description: 'Clean, aesthetic and high-quality photos for your website, social media and marketing needs.',
    icon: 'Camera',
    image: '/images/service-photo.jpg',
    deliverables: ['15-25 high-resolution retouched stills', 'E-commerce white/neutral background shots', 'Editorial lifestyle flatlays', 'Commercial usage rights included'],
    timeline: '4-5 business days',
    bestFor: 'Website banners, PDP product pages, email marketing, Instagram grid'
  }
];

export const WHY_VYRA_POINTS = [
  {
    number: '01',
    title: 'Authentic Storytelling',
    description: 'Relatable content that feels natural and builds trust.',
    icon: 'HeartHandshake'
  },
  {
    number: '02',
    title: 'Platform-Ready Content',
    description: 'Optimized for Reels, TikTok, Instagram and more.',
    icon: 'Smartphone'
  },
  {
    number: '03',
    title: 'Creative Direction',
    description: 'Fresh ideas tailored to your brand goals.',
    icon: 'Compass'
  },
  {
    number: '04',
    title: 'Polished Editing',
    description: 'Clean, modern and aesthetic visuals.',
    icon: 'Sparkle'
  },
  {
    number: '05',
    title: 'Reliable Collaboration',
    description: 'Clear communication and a smooth, professional experience.',
    icon: 'Users'
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'beauty-brands',
    title: 'Beauty Brands',
    image: '/images/industry-beauty.jpg',
    description: 'High-pigment cosmetics, skincare essentials, clean beauty formulations, and everyday routines.',
    examples: ['Swatches & reviews', 'Dermatologist-style break downs', 'Glowy glam routines']
  },
  {
    id: 'fashion-brands',
    title: 'Fashion Brands',
    image: '/images/industry-fashion.jpg',
    description: 'Apparel lines, transitional outerwear, everyday luxury jewelry, and footwear try-ons.',
    examples: ['Styling 1 piece 3 ways', 'Sizing & fabric reviews', 'OOTD transition reels']
  },
  {
    id: 'wellness-brands',
    title: 'Wellness Brands',
    image: '/images/industry-wellness.jpg',
    description: 'Superfood blends, adaptogens, body care rituals, and calm mindful lifestyle products.',
    examples: ['Morning tonic prep', 'Mindful self-care routines', 'Honest supplement reviews']
  },
  {
    id: 'lifestyle-brands',
    title: 'Lifestyle Brands',
    image: '/images/industry-lifestyle.jpg',
    description: 'Aesthetic home accessories, artisanal fragrances, candles, and modern interior essentials.',
    examples: ['Room refresh tours', 'Cozy unboxing & candle lighting', 'Daily ambient routines']
  }
];
