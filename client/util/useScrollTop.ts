import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === '') scrollTo(0, 0);
  }, [pathname]);
};
