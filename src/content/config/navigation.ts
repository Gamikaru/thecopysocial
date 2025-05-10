import { NavItem } from '../types/types';

export const mainNavItems: NavItem[] = [
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Services',
        path: '/services',
    },
    {
        label: 'Portfolio',
        path: '/portfolio',
    },
    {
        label: 'Blog',
        path: '/blog',
    },
    {
        label: 'Subscribe',
        path: '/subscribe',
    }
];

export const ctaButton: NavItem = {
    label: 'Work with me',
    path: '/contact',
    isButton: true
};

export const footerLinks: NavItem[] = [
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
    {
        label: 'Services',
        path: '/services',
    },
    {
        label: 'Portfolio',
        path: '/portfolio',
    },
    {
        label: 'Blog',
        path: '/blog',
    }
];

export const socialLinks = [
    {
        platform: 'Email',
        url: 'mailto:contact@thecopysocial.com',
        ariaLabel: 'Email'
    },
    {
        platform: 'Instagram',
        url: 'https://instagram.com/thecopysocial',
        ariaLabel: 'Instagram'
    }
];

export const brandInfo = {
    name: 'The Copy Social',
    tagline: 'Turning words into conversions',
    copyright: `© ${new Date().getFullYear()} The Copy Social. All rights reserved.`
};
