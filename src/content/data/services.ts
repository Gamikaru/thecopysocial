import { ServicePackage, ServiceAddOn } from '../types/types';

export const servicesHero = {
  title: "Website Copywriting",
  description: "Your website has about three seconds to grab attention, so let's make them count. With clear, personality packed copy that speaks to your audience, keeps them hooked, and (most importantly) gets them to take action. No fluff, no jargon-just the right words to make your brand shine and your website do the hard work for you."
};

export const websiteCopywritingPackage: ServicePackage = {
  title: "WEBSITE COPYWRITING PACKAGES",
  description: "Professional, personality-packed website copy that converts visitors into customers.",
  features: [
    { text: "Up to 9 pages of SEO-Optimized website copy" },
    { text: "Initial 60 minute kick-off and strategy call via Zoom" },
    { text: "Custom persona questionnaire + market research" },
    { text: "Wireframe and/or communication with your graphic designer" },
    { text: "Live 60 minute copy review call" },
    { text: "2 rounds of complimentary edits" }
  ],
  startingPrice: "Starting at $1,350"
};

export const launchCopywritingPackage: ServicePackage = {
  title: "LAUNCH COPYWRITING PACKAGES",
  description: "When it comes to launching, your copy isn't just important, it's *make *or *break. *So, finding a sales page copywriter you can trust? Yeah, that's a non-negotiable. I'll help you craft messaging that's clear, consistent, and most importantly, built to sell (without the cringe-worthy hype or desperate sales tactics). Because let's be real, your offer should feel irresistible, not like a late-night infomercial. With the right words, we'll turn browsers into buyers and make sure your launch actually *lands.*",
  features: [
    // Note: The original text didn't list specific features for launch copywriting
    // You may want to add actual features here
    { text: "Strategic sales page copy that converts" },
    { text: "Email sequence writing for your launch" },
    { text: "Custom audience research" },
    { text: "Conversion-focused messaging" },
    { text: "Launch strategy consultation" }
  ],
  startingPrice: "Starting at $1,800"
};

export const addOns: ServiceAddOn[] = [
  {
    title: "SEO Blog Posts",
    description: "Drive organic traffic with keyword-optimized blog content",
    price: "$350 per post"
  },
  {
    title: "Email Sequences",
    description: "Nurture leads and drive sales with strategic email campaigns",
    price: "$950 for a 5-email sequence"
  },
  {
    title: "Content Strategy",
    description: "Develop a comprehensive content plan for your business",
    price: "$750"
  }
];

export const servicesCta = {
  text: "Ready to transform your website with words that work?",
  buttonText: "Work with me",
  buttonLink: "/contact"
};

export const metaInfo = {
  title: "Services | The Copy Social",
  description: "Professional website copywriting and launch copywriting services that convert visitors into customers. SEO-optimized content that speaks to your audience."
};
