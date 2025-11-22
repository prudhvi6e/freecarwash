import React from 'react';
import html from './footer.html?raw';

export default function Footer() {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
