import React from 'react';
import html from './contact_content.html?raw';

export default function ContactContent() {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
