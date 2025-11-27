import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html from './footer.html?raw';

export default function Footer() {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClick = (e) => {
            const link = e.target.closest('a');
            if (link && link.href && link.href.startsWith(window.location.origin)) {
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
