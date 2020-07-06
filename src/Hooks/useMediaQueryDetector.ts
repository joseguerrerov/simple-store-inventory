import { useEffect, useState } from 'react';
import { widthBreakPoints } from '../Styles/theme';

export const isMqMobile = () => window.innerWidth < widthBreakPoints.tablet;
export const isMqTablet = () =>
  window.innerWidth >= widthBreakPoints.tablet &&
  window.innerWidth < widthBreakPoints.desktop;
export const isMqDesktop = () => window.innerWidth >= widthBreakPoints.desktop;

const useMediaQueryDetector = () => {
  const [isMobile, setIsMobile] = useState<boolean>(isMqMobile());
  const [isTablet, setIsTablet] = useState<boolean>(isMqTablet());
  const [isDesktop, setIsDesktop] = useState<boolean>(isMqDesktop());

  const onResize = () => {
    setIsMobile(isMqMobile());
    setIsTablet(isMqTablet());
    setIsDesktop(isMqDesktop());
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useMediaQueryDetector;
