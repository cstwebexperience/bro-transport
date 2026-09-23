// Decupează un vehicul fotografiat pe fundal alb: umple de la margini peste pixelii deschiși și gri
// (fundal + umbra deschisă), restul rămâne opac. Rulare: node scripts/cutout.mjs in.png out.webp
import { createRequire } from 'node:module'
const require = createRequire('C:/Users/cst/art-prep/package.json')
const sharp = require('sharp')
const [, , IN, OUT] = process.argv
const { data, info } = await sharp(IN).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H } = info
const isBg = (i) => {
  const yy = ((i / 4) / W) | 0, low = yy > H * 0.6
  const r = data[i], g = data[i + 1], b = data[i + 2]
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b)
  return low ? (mx > 105 && mx - mn < 30) : (mx > 175 && mx - mn < 26)
}
const seen = new Uint8Array(W * H)
const q = []
for (let x = 0; x < W; x++) { q.push(x, (H - 1) * W + x) }
for (let y = 0; y < H; y++) { q.push(y * W, y * W + W - 1) }
while (q.length) {
  const p = q.pop()
  if (seen[p]) continue
  if (!isBg(p * 4)) continue
  seen[p] = 1
  const x = p % W, y = (p / W) | 0
  if (x > 0) q.push(p - 1); if (x < W - 1) q.push(p + 1)
  if (y > 0) q.push(p - W); if (y < H - 1) q.push(p + W)
}
// muchie moale: pixelii opaci vecini cu fundalul devin semi-transparenți
for (let p = 0; p < W * H; p++) {
  if (seen[p]) { data[p * 4 + 3] = 0; continue }
  const x = p % W, y = (p / W) | 0
  let n = 0
  for (const d of [-1, 1, -W, W]) { const q2 = p + d; if (q2 >= 0 && q2 < W * H && seen[q2] && Math.abs((q2 % W) - x) <= 1) n++ }
  if (n) data[p * 4 + 3] = 150
}
await sharp(data, { raw: { width: W, height: H, channels: 4 } }).webp({ quality: 86, alphaQuality: 90 }).toFile(OUT)
console.log('ok', W, H)
