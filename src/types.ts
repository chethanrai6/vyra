export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  image: string;
  creator: string;
  description: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  deliverables: string[];
  timeline: string;
  bestFor: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  image: string;
  description: string;
  examples: string[];
}

export interface ContactFormData {
  fullName: string;
  brandName: string;
  email: string;
  serviceInterest: string;
  budget: string;
  message: string;
}
