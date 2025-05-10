import { PortfolioProject } from '../types/types';

export const portfolioHero = {
    title: "My Work",
    description: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
};

export const portfolioProjects: PortfolioProject[] = [
    {
        id: "project-one",
        title: "Project One",
        description: "A complete website redesign with conversion-focused copy for a coaching business that increased leads by 45%.",
        imagePath: "/images/portfolio/project-1.jpeg", // You'll need to add these images
        tags: ["Website Copy", "Brand Messaging", "SEO"],
        link: "/portfolio/project-one"
    },
    {
        id: "project-two",
        title: "Project Two",
        description: "Launch campaign copy for a digital course creator that generated $125K in revenue in the first week.",
        imagePath: "/images/portfolio/project-2.jpeg",
        tags: ["Launch Copy", "Email Sequence", "Sales Page"],
        link: "/portfolio/project-two"
    },
    {
        id: "project-three",
        title: "Project Three",
        description: "Brand voice development and website copy for a startup that helped secure their first round of funding.",
        imagePath: "/images/portfolio/project-3.jpeg",
        tags: ["Brand Voice", "Website Copy", "Pitch Materials"],
        link: "/portfolio/project-three"
    },
    {
        id: "project-four",
        title: "Project Four",
        description: "Email marketing campaign for an ecommerce business that drove a 32% increase in quarterly sales.",
        imagePath: "/images/portfolio/project-4.jpeg",
        tags: ["Email Marketing", "Product Descriptions", "Conversion Copy"],
        link: "/portfolio/project-four"
    },
    {
        id: "project-five",
        title: "Project Five",
        description: "Blog content strategy and SEO-optimized articles that doubled organic traffic in six months.",
        imagePath: "/images/portfolio/project-5.jpeg",
        tags: ["Blog Strategy", "SEO Content", "Lead Generation"],
        link: "/portfolio/project-five"
    },
    {
        id: "project-six",
        title: "Project Six",
        description: "Complete brand messaging framework and website copy for a service-based business entering a competitive market.",
        imagePath: "/images/portfolio/project-6.jpeg",
        tags: ["Brand Messaging", "Website Copy", "Positioning"],
        link: "/portfolio/project-six"
    }
];

export const portfolioCta = {
    text: "Like what you see? Let's create something amazing together.",
    buttonText: "Work with me",
    buttonLink: "/contact"
};

export const testimonials = [
    {
        quote: "Ashley completely transformed how we communicate with our audience. Our conversion rate has increased by 30% since implementing her copy!",
        author: "Sarah Johnson",
        company: "Bloom Digital Marketing"
    },
    {
        quote: "Working with Ashley was a game-changer for our brand. She captured our voice perfectly and created copy that truly resonates with our customers.",
        author: "Michael Rodriguez",
        company: "Elemental Wellness"
    }
];

export const metaInfo = {
    title: "Portfolio | The Copy Social",
    description: "View examples of my copywriting work, including website copy, launch campaigns, and content marketing strategies that have helped clients grow their businesses."
};
