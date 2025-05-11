const fs = require('fs');

const urls = [
  '/', '/en/', '/es/',
  '/fr/conditions-generales', '/en/terms-of-use', '/es/terminos-de-uso',
  '/fr/confidentialite', '/en/privacy-policy', '/es/politica-de-privacidad',
  '/fr/contact', '/en/contact', '/es/contacto',
  '/fr/qui-sommes-nous', '/en/about-us', '/es/quienes-somos',
  '/fr/partenaires', '/en/partners', '/es/partners',
  '/fr/uxel-lotoise', '/en/uxel-lotoise', '/es/uxel-lotoise'
];

const domain = "https://guidonvayracois.fr";

const generateSitemap = () => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const footer = `</urlset>`;

  const body = urls.map(url => `
  <url>
    <loc>${domain}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === '/' || url === '/en/' || url === '/es/' ? '1.0' : '0.7'}</priority>
  </url>`).join('\n');

  const sitemap = header + body + '\n' + footer;

  fs.writeFileSync('sitemap.xml', sitemap.trim());
  console.log('✅ sitemap.xml généré !');
};

generateSitemap();
