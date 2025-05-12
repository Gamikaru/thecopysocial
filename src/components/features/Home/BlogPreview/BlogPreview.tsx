"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopBlogPreview from './DesktopBlogPreview';
import MobileBlogPreview from './MobileBlogPreview';

interface BlogPreviewProps {
  className?: string;
  title?: string;
  description?: string;
  postsToShow?: number;
}

const BlogPreview: React.FC<BlogPreviewProps> = (props) => {
  const { isMobile } = useDevice();

  return isMobile ? <MobileBlogPreview {...props} /> : <DesktopBlogPreview {...props} />;
};

export default BlogPreview;