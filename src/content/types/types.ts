// Navigation
export interface NavItem {
    label: string;
    path: string;
    isButton?: boolean;
}

// Services
export interface ServiceFeature {
    text: string;
}

export interface ServiceAddOn {
    title: string;
    description?: string;
    price?: string;
}

export interface ServicePackage {
    title: string;
    description: string;
    features: ServiceFeature[];
    startingPrice?: string;
    addOns?: ServiceAddOn[];
}

// Portfolio
export interface PortfolioProject {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    tags?: string[];
    link?: string;
}

// Blog
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    slug: string;
    tags?: string[];
}

// About
export interface AboutSection {
    title: string;
    content: string[];
}

// Newsletter
export interface NewsletterContent {
    title: string;
    description: string;
    buttonText: string;
    placeholder: string;
}

// Home Page
export interface HeroSection {
    headline: string;
    subheadline: string;
    cta: {
        text: string;
        link: string;
    };
}

export interface TestimonialItem {
    quote: string;
    author: string;
    company?: string;
}

// Process Section
export type ProcessStep = {
    number: string;
    title: string;
    description: string;
};
