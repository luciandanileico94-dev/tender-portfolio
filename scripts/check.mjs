import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = ['index.html', 'styles.css', 'README.md', 'docs/application-evidence-ro.md', 'assets/projects/farm-registry-web.png', 'assets/projects/farm-registry-python.png', 'assets/projects/farm-registry-mobile.png', 'assets/projects/workplace-safety.png', 'assets/projects/tender-intelligence.png', 'assets/projects/learning-platform.png'];
const errors = [];
for (const file of required) if (!existsSync(join(root, file))) errors.push(`Lipseste: ${file}`);
const site = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'styles.css'), 'utf8');
const publicText = [site, css, readFileSync(join(root, 'README.md'), 'utf8'), readFileSync(join(root, 'docs/application-evidence-ro.md'), 'utf8')].join('\n');
for (const match of publicText.matchAll(/(?:href|src)="([^"]+)"/g)) {
  const target = match[1];
  if (!target || target === '#') errors.push('Link gol');
  if (target.startsWith('assets/')) {
    if (!existsSync(join(root, target))) errors.push(`Fisier media lipsa: ${target}`);
  }
}
for (const term of ['Thumbnail', 'Field Mobile', 'GraphQL', 'MPass', 'MConnect', '—', '–']) if (publicText.includes(term)) errors.push(`Termen interzis: ${term}`);
if (!site.includes('id="continut"') || !site.includes('<main') || !site.includes('<nav')) errors.push('Landmark-uri accesibile incomplete');
if (/<a\b[^>]*href=""/.test(publicText)) errors.push('href gol');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`OK: ${required.length} fisiere necesare, linkuri locale si continut public verificate.`);
