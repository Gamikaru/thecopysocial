import { HeroSection, TestimonialItem } from '../types/types';

export const heroSection: HeroSection = {
  headline: "Words that connect, convert, and captivate",
  subheadline: "Professional copywriting for businesses ready to stand out, speak clearly, and sell confidently.",
  cta: {
    text: "Work with me",
    link: "/contact"
  }
};

export const introSection = {
  title: "Hi, I'm Ashley",
  description: "I help businesses find their voice and connect with their ideal customers through strategic, personality-packed copy that converts.",
  imageAlt: "Ashley Rudolph, founder of The Copy Social",
  imagePath: "/images/ashley-portrait.jpeg" // You'll need to add this image
};

export const servicesPreview = {
  title: "How I Can Help",
  description: "From website copy that converts to launch campaigns that sell, I create strategic content that helps you achieve your business goals.",
  services: [
    {
      title: "Website Copywriting",
      description: "Clear, compelling website copy that speaks to your audience and drives action.",
      icon: "Globe",
      link: "/services#website"
    },
    {
      title: "Launch Copywriting",
      description: "Strategic sales pages and email sequences that turn browsers into buyers.",
      icon: "Rocket",
      link: "/services#launch"
    },
    {
      title: "Content Strategy",
      description: "Comprehensive content plans that build authority and drive organic traffic.",
      icon: "Strategy",
      link: "/services#strategy"
    }
  ]
};

export const processSection = {
  title: "My Process",
  description: "Creating effective copy is more than just writing words. Here's how we'll work together to create content that resonates with your audience and achieves your goals.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description: "We'll dive deep into your business, audience, and goals to ensure your copy is strategic and aligned."
    },
    {
      number: "02",
      title: "Research",
      description: "I'll analyze your market, competitors, and audience to identify opportunities and messaging that resonates."
    },
    {
      number: "03",
      title: "Creation",
      description: "Using insights from our research, I'll craft compelling copy that speaks directly to your ideal customers."
    },
    {
      number: "04",
      title: "Refinement",
      description: "We'll review the copy together and make adjustments to ensure it perfectly captures your brand voice."
    }
  ]
};

export const testimonials: TestimonialItem[] = [
  {
    quote: "Ashley completely transformed our website copy. Not only does it sound more like us, but our conversion rate has increased by 30% since implementing her work.",
    author: "Sarah Johnson",
    company: "Bloom Digital Marketing"
  },
  {
    quote: "Working with Ashley was a game-changer for our launch. Her copy helped us exceed our revenue goals by 45% and connect with our audience in a way we never had before.",
    author: "Michael Rodriguez",
    company: "Elemental Wellness"
  },
  {
    quote: "Ashley has a gift for finding exactly the right words. She captured our brand voice perfectly and created copy that truly resonates with our customers.",
    author: "Jennifer Thompson",
    company: "Bright Ideas Studio"
  }
];

export const blogPreview = {
  title: "From the Blog",
  description: "Insights, tips, and strategies to help you communicate better and grow your business.",
  viewAllLink: "/blog",
  viewAllText: "View all posts"
};

export const ctaSection = {
  title: "Ready to transform your copy?",
  description: "Let's work together to create content that connects with your audience, communicates your value, and converts browsers into buyers.",
  buttonText: "Work with me",
  buttonLink: "/contact"
};

export const metaInfo = {
  title: "The Copy Social | Professional Copywriting Services",
  description: "The Copy Social provides professional copywriting services for businesses ready to stand out, speak clearly, and sell confidently."
};
