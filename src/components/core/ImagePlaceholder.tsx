// src/components/ui/ImagePlaceholder.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./Icon";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: string; // e.g. "16/9", "1/1", "4/3"
  fill?: boolean;
  priority?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  hoverEffect?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none";
  placeholderText?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  aspectRatio = "auto",
  fill = false,
  priority = false,
  rounded = "none",
  hoverEffect = false,
  objectFit = "cover",
  placeholderText = "Image Placeholder",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Define rounded corner classes based on the 'rounded' prop
  const roundedClasses = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Define hover effect
  const hoverClass = hoverEffect
    ? "transition-transform duration-300 hover:scale-105"
    : "";

  // Determine if we should show the placeholder (no src or error loading)
  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`relative overflow-hidden ${roundedClasses[rounded]} ${hoverClass} ${className}`}
      style={{
        aspectRatio: aspectRatio,
        width: fill ? "100%" : width ? `${width}px` : "100%",
        height: fill ? "100%" : height ? `${height}px` : "auto",
      }}
    >
      {showPlaceholder ? (
        <div className="absolute inset-0 bg-bg-secondary border border-bg-tertiary flex flex-col items-center justify-center text-center p-4">
          <Icon
            name="fi:FiImage"
            size={32}
            className="text-text-tertiary mb-2"
          />
          <p className="text-text-tertiary text-sm font-serif italic">
            {placeholderText}
          </p>
          <p className="text-text-tertiary text-xs mt-1">
            {width && height
              ? `${width}×${height}`
              : "Dimensions will adapt to container"}
          </p>
        </div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoaded ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-bg-secondary flex items-center justify-center"
          >
            <Icon
              name="fi:FiLoader"
              className="animate-spin text-brand-accent"
              size={24}
            />
          </motion.div>

          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            priority={priority}
            className={`object-${objectFit} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            sizes={fill ? "(max-width: 768px) 100vw, 50vw" : undefined}
          />
        </>
      )}
    </div>
  );
};

export default ImagePlaceholder;
