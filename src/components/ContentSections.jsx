import React from 'react';
import html from './content.html?raw';

export default function ContentSections() {
    // Rendering raw HTML content
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
