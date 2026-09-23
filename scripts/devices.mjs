// Screenshot-uri full-page pe iPhone (WebKit) și Android (Chromium 320/360/412) + desktop.
// Rulare: node scripts/devices.mjs [url]
import { createRequire } from 'node:module'
const require = createRequire('C:/Users/cst/cst-portfolio-v2/package.json')
const { webkit, chromium, devices } = require('playwright')
const URL = process.argv[2] || 'http://localhost:3040'
const OUT = 'C:/Users/cst/bro-transport/.preview'
const runs = [
  ['iphone', webkit, { ...devices['iPhone 13'], viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 }],
  ['a320', chromium, { viewport: { width: 320, height: 640 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }],
  ['a360', chromium, { viewport: { width: 360, height: 780 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }],
  ['a412', chromium, { viewport: { width: 412, height: 915 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }],
  ['desk', chromium, { viewport: { width: 1440, height: 900 } }],
]
for (const [name, engine, opts] of runs) {
  const b = await engine.launch()
  const p = await (await b.newContext({ ...opts, locale: 'ro-RO' })).newPage()
  p.on('pageerror', (e) => console.log(name, 'JS ERROR', e.message))
  p.on('response', (r) => r.status() >= 400 && console.log(name, r.status(), r.url()))
  await p.goto(URL, { waitUntil: 'load' })
  await p.waitForTimeout(800)
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  console.log(name, 'overflow-x:', ov)
  await p.screenshot({ path: `${OUT}/${name}-top.jpg`, type: 'jpeg', quality: 80 })
  for (let y = 0; y < 16000; y += 600) { await p.evaluate((v) => scrollTo(0, v), y); await p.waitForTimeout(80) }
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300)
  await p.screenshot({ path: `${OUT}/${name}-full.jpg`, type: 'jpeg', quality: 70, fullPage: true })
  await b.close()
}
