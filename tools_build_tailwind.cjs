/**
 * Optional regeneration of the local Tailwind utilities bundle.
 * Run after installing tailwindcss 4.x: node tools_build_tailwind.cjs
 * The shipped assets/css/tailwind.css works as-is with no Node/install/CDN.
 */
const fs = require('fs');
const path = require('path');
const tw = require('tailwindcss');
const root = __dirname;
(async () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const candidates = new Set();
  for (const match of html.matchAll(/class="([^"]+)"/g)) {
    for (const token of match[1].split(/\s+/)) if (token) candidates.add(token);
  }
  // Dynamic card classes and their grid states (used from main.js):
  ['grid','md:grid-cols-2','lg:grid-cols-3','gap-4','flex','items-center','justify-between','justify-center','lg:grid-cols-2','md:grid-cols-3','lg:grid-cols-4'].forEach(x => candidates.add(x));
  const source = `@theme { --spacing: .25rem; --breakpoint-md: 48rem; --breakpoint-lg: 64rem; }\n@tailwind utilities;`;
  const compiler = await tw.compile(source);
  fs.writeFileSync(path.join(root, 'assets/css/tailwind.css'), compiler.build([...candidates]));
  console.log('Compiled Tailwind CSS:', candidates.size, 'candidates');
})().catch(err => { console.error(err); process.exit(1); });
