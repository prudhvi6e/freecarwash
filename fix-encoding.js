import fs from 'fs';
import path from 'path';

const files = [
    'src/components/header.html',
    'src/components/footer.html',
    'src/components/content.html',
    'src/components/Header.jsx',
    'src/components/Footer.jsx',
    'src/components/ContentSections.jsx',
    'src/App.jsx',
    'src/main.jsx',
    'index.html'
];

files.forEach(file => {
    const filePath = path.resolve(file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Remove BOM if present
        if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
        }
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed ${file}`);
    } else {
        console.log(`Missing ${file}`);
    }
});
