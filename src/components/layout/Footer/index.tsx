import React from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const Footer: React.FC = () => {
  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Footer;
