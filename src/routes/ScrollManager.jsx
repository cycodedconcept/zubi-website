import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        const section = document.querySelector(hash);

        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
};

export default ScrollManager;
