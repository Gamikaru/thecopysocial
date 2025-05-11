"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useDeviceDetect } from "../hooks/useDeviceDetect";

// Create the context with default values
interface DeviceContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: "mobile" | "tablet" | "desktop";
  width: number;
  height: number;
  orientation: "portrait" | "landscape";
  hasTouch: boolean;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

// Provider component
export const DeviceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const deviceInfo = useDeviceDetect();

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
};

// Custom hook to use the device context
export const useDevice = (): DeviceContextType => {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
};
