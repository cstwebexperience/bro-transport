// Verifică dacă pagina poate fi împinsă stânga-dreapta pe iPhone (WebKit), la mai multe poziții de scroll.
import { createRequire } from 'node:module'
const require = createRequire('C:/Users/cst/cst-portfolio-v2/package.json')
const { webkit, devices } = require('playwright')
const URL = process.argv[2] || 'file:///C:/Users/cst/bro-transport/index.html'
const b = await webkit.launch()
const p = await (await b.newContext({ ...devices['iPhone 13'] })).newPage()
await p.goto(URL, { waitUntil: 'load' })
await p.waitForTimeout(600)
const H = await p.evaluate(() => document.documentElement.scrollHeight)
let bad = 0
for (let y = 0; y < H; y += 400) {
  const r = await p.evaluate((y) => { scrollTo(600, y); return { x: scrollX, sw: document.documentElement.scrollWidth, bw: document.body.scrollWidth } }, y)
  if (r.x > 0 || r.sw > 390 || r.bw > 390) { bad++; console.log('y', y, JSON.stringify(r)) }
}
const wide = await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.right > innerWidth + 1 && r.width > 0 }).slice(0, 12).map(e => e.tagName + '.' + e.className + ' ' + Math.round(e.getBoundingClientRect().right)))
console.log(bad ? 'PROBLEME: ' + bad : 'OK: nu fuge lateral'); console.log(wide.join('\n'))
await b.close()
