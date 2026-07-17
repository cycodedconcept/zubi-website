import { useEffect, useRef } from 'react';
import './Reveal.css';

const Reveal = ({
  as = 'div',
  children,
  className = '',
  variant = 'up',
  delay = 0,
  threshold = 0.18,
  style,
  ...props
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        node.classList.add('is-visible');
        observer.unobserve(node);
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const classes = ['ui-reveal', `ui-reveal--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  const Component = as;

  return (
    <Component
      ref={elementRef}
      className={classes}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
