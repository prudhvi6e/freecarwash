import React from 'react';
import html from './franchise_content.html?raw';

export default function FranchiseContent() {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
