const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract chunks using regex
const bismillahMatch = indexHtml.match(/(<div class="bismillah-container">[\s\S]*?<\/div>)/);
const marqueeMatch = indexHtml.match(/(<div class="notice-marquee">[\s\S]*?<\/marquee>\s*<\/div>)/);
const navMatch = indexHtml.match(/(<nav class="navbar">[\s\S]*?<\/nav>)/);
const footerMatch = indexHtml.match(/(<footer class="footer">[\s\S]*?<\/footer>)/);

if (!bismillahMatch || !marqueeMatch || !navMatch || !footerMatch) {
    console.error("Could not find global components in index.html");
    process.exit(1);
}

const bismillahHTML = bismillahMatch[1];
const marqueeHTML = marqueeMatch[1];
const navHTML = navMatch[1];
const footerHTML = footerMatch[1];

const filesToUpdate = ['about.html', 'academics.html', 'gallery.html', 'contact.html'];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace Bismillah Header (if exists)
    content = content.replace(/<div class="bismillah-container">[\s\S]*?<\/div>/, bismillahHTML);

    // Replace Marquee
    content = content.replace(/<div class="notice-marquee">[\s\S]*?<\/marquee>\s*<\/div>/, marqueeHTML);

    // Replace Nav
    content = content.replace(/<nav class="navbar">[\s\S]*?<\/nav>/, navHTML);

    // Replace Footer
    content = content.replace(/<footer class="footer">[\s\S]*?<\/footer>/, footerHTML);

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated globals in ${file}`);
});
