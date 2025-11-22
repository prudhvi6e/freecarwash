import React from 'react';
import html from './header.html?raw';

export default function Header() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
