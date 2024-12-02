import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Video {
  id: string;
  url: string;
  thumbnail: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  image: string;
  review: string;
  date: string;
}

interface SiteConfig {
  // Header
  siteName: string;
  headerTitle: string;
  headerSubtitle: string;
  
  // Pricing
  originalPrice: number;
  discountPercentage: number;
  deliveryFee: number;
  
  // Content
  videos: Video[];
  productImages: ProductImage[];
  features: Feature[];
  faqs: FAQ[];
  reviews: Review[];
  
  // Contact
  whatsappNumber: string;
  whatsappGroupLink: string;
  telegramGroupLink: string;
  
  // Colors
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  
  // Actions
  updateConfig: (config: Partial<Omit<SiteConfig, 'updateConfig'>>) => void;
}

export const useSiteConfig = create<SiteConfig>()(
  persist(
    (set) => ({
      // Default values
      siteName: "ACE Series Smartwatch",
      headerTitle: "Breathtaking Smart Watch",
      headerSubtitle: "Series 9 Ultra",
      
      originalPrice: 35000,
      discountPercentage: 10,
      deliveryFee: 3000,
      
      videos: [
        {
          id: "1",
          url: "https://videocdn.alibaba.com/icbu_vod_video/video_target/gv93-2f8e2476-a1ace553-92707862-61d1/trans/7629fc36-c180-4e6b-9747-f0fda3fde614-h264-hd.mp4",
          thumbnail: "https://sc04.alicdn.com/kf/H115b164f089a46448d86afd2603f1748h.jpg"
        },
        {
          id: "2",
          url: "https://scontent.cdninstagram.com/o1/v/t16/f1/m86/B94CB96CA7E7737464F57D471D99F3B9_video_dashinit.mp4",
          thumbnail: "https://doritstore.com/wp-content/uploads/2024/11/IMG_20241107_020322_375.jpg"
        }
      ],
      
      productImages: [
        {
          id: "1",
          url: "https://sc04.alicdn.com/kf/H115b164f089a46448d86afd2603f1748h.jpg",
          alt: "ACE Series Smartwatch Front View"
        },
        {
          id: "2",
          url: "https://sc04.alicdn.com/kf/Haf2f09428d814ac6822e3d91ece160aa7.jpg",
          alt: "ACE Series Smartwatch Side View"
        },
        {
          id: "3",
          url: "https://sc04.alicdn.com/kf/Hc02e6635b9994af0a5e2a860d7baa8ect.jpg",
          alt: "ACE Series Smartwatch Features"
        },
        {
          id: "4",
          url: "https://sc04.alicdn.com/kf/H417342e607d54f3bbc95d827eae01b18l.jpg",
          alt: "ACE Series Smartwatch Package"
        }
      ],
      
      features: [
        {
          id: "1",
          icon: "Heart",
          title: "Health Monitoring",
          description: "Advanced health tracking features including heart rate, sleep, and activity monitoring"
        },
        // ... other features
      ],
      
      faqs: [
        {
          id: "1",
          question: "What's the battery life?",
          answer: "The ACE Series smartwatch offers 5-10 days of battery life on a single charge"
        },
        // ... other FAQs
      ],
      
      reviews: [
        {
          id: "1",
          name: "Chioma Adebayo",
          city: "Lagos",
          rating: 5,
          image: "https://example.com/review1.jpg",
          review: "Amazing smartwatch with great features!",
          date: "2024-03-15"
        },
        // ... other reviews
      ],
      
      whatsappNumber: "2348144493361",
      whatsappGroupLink: "https://chat.whatsapp.com/EJo3AG9yz0TIHyQsc8sPR1",
      telegramGroupLink: "https://t.me/muahibstores",
      
      primaryColor: "#7C3AED", // purple-600
      secondaryColor: "#EAB308", // yellow-500
      accentColor: "#1F2937", // gray-800
      
      updateConfig: (newConfig) => set((state) => ({
        ...state,
        ...newConfig
      }))
    }),
    {
      name: 'site-config'
    }
  )
);