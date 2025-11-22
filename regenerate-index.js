import fs from 'fs';
import path from 'path';

const originalPath = path.resolve('../index.html');
const targetPath = path.resolve('index.html');

try {
    const originalContent = fs.readFileSync(originalPath, 'utf8');
    const lines = originalContent.split(/\r?\n/);

    // Extract Head (approx lines 0-260, but let's find </head>)
    let headEndIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('</head>')) {
            headEndIndex = i;
            break;
        }
    }

    if (headEndIndex === -1) throw new Error('Could not find </head>');

    const headLines = lines.slice(0, headEndIndex + 1);

    // Extract Body Start (just the body tag)
    let bodyStartIndex = -1;
    for (let i = headEndIndex; i < lines.length; i++) {
        if (lines[i].includes('<body')) {
            bodyStartIndex = i;
            break;
        }
    }

    const bodyTag = lines[bodyStartIndex];

    // Extract Scripts (from footer start to end)
    // We used line 1525 in PowerShell, let's look for the first script after footer or just the block of scripts at the end.
    // In the original file, there is a block of scripts at the end.
    // Let's find where the main content ends.
    // The PowerShell script used index 1525. Let's stick to that or find a marker.
    // Marker: <script> window.RS_MODULES

    let scriptStartIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('window.RS_MODULES')) {
            // The script tag starts a few lines before?
            // In the view_file output (Step 101), line 1526 is <script>.
            // Let's search for that specific script tag line.
            if (lines[i - 1].trim() === '<script>') {
                scriptStartIndex = i - 1;
                break;
            }
        }
    }

    if (scriptStartIndex === -1) {
        // Fallback to 1525 if we can't find it, but safer to search.
        // Let's try searching for the specific comment or script.
        // Line 1526 in original was <script>.
        scriptStartIndex = 1526 - 1; // 0-indexed
    }

    const scriptLines = lines.slice(scriptStartIndex);

    // Filter out Cloudflare script
    const filteredScriptLines = scriptLines.filter(line => !line.includes('cloudflareinsights.com/beacon.min.js'));

    // Construct new content
    const newLines = [
        ...headLines,
        bodyTag,
        '    <div id="root"></div>',
        '    <script type="module" src="/src/main.jsx"></script>',
        ...filteredScriptLines
    ];

    // Fix paths
    const finalContent = newLines.join('\n')
        .replace(/href="styles\//g, 'href="/styles/')
        .replace(/src="scripts\//g, 'src="/scripts/')
        .replace(/src="pics\//g, 'src="/pics/')
        .replace(/url\("pics\//g, 'url("/pics/')
        .replace(/srcset="pics\//g, 'srcset="/pics/');

    fs.writeFileSync(targetPath, finalContent, 'utf8');
    console.log('Regenerated index.html successfully.');

} catch (err) {
    console.error('Error regenerating index.html:', err);
    process.exit(1);
}
