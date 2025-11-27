import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html from './header.html?raw';

export default function Header() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        // Check if it's a hash link or external link
        const url = new URL(link.href);
        if (url.origin === window.location.origin && !link.getAttribute('target')) {
          e.preventDefault();
          navigate(url.pathname + url.search + url.hash);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleClick);
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleClick);
      }
    };
  }, [navigate]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
}
