import { readFileSync, existsSync } from "fs";

const ORIGIN = "https://www.tpcwindowtinting.com";

const smFile = ".next/server/app/sitemap.xml.body";
const sm = existsSync(smFile) ? readFileSync(smFile, "utf8") : "";
const sitemapUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const robotsFile = ".next/server/app/robots.txt.body";
const robots = existsSync(robotsFile) ? readFileSync(robotsFile, "utf8") : "";

const pathOf = (url) => url.replace(ORIGIN, "") || "/";
const htmlOf = (route) =>
  route === "/" ? ".next/server/app/index.html" : `.next/server/app${route}.html`;

const allRoutes = new Set(sitemapUrls.map(pathOf));

function extract(html) {
  const headMatch = html.match(/<head>[\s\S]*?<\/head>/i);
  const head = headMatch ? headMatch[0] : html;
  const title = (head.match(/<title>([^<]*)<\/title>/i) || [])[1] || "";
  const desc = (head.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "";
  const canonical = (head.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1] || "";
  const robotsMeta = (head.match(/<meta name="robots" content="([^"]*)"/i) || [])[1] || "";
  const ogImg = (head.match(/<meta property="og:image" content="([^"]*)"/i) || [])[1] || "";
  const twCard = (head.match(/<meta name="twitter:card" content="([^"]*)"/i) || [])[1] || "";
  const body = html.replace(headMatch ? headMatch[0] : "", "");
  const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").trim()
  );
  const types = [...html.matchAll(/"@type":(\[[^\]]*\]|"[^"]*")/g)]
    .map((m) => m[1].replace(/[\[\]"]/g, ""))
    .flatMap((t) => t.split(","));
  const schemaTypes = [...new Set(types)];
  const ldStripped = body.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
    ""
  );
  const hrefs = [...ldStripped.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const dest = new Set();
  for (let h of hrefs) {
    if (/^(tel:|sms:|mailto:)/.test(h)) continue;
    if (/^https?:\/\//.test(h)) {
      if (h.startsWith(ORIGIN)) h = pathOf(h);
      else continue;
    }
    if (h === "#contact") { dest.add("#contact"); continue; }
    if (h === "/" || h.startsWith("/#")) { dest.add("/"); continue; }
    const clean = h.split("#")[0].replace(/\/$/, "");
    if (allRoutes.has(clean)) dest.add(clean);
  }
  return { title, desc, canonical, robotsMeta, ogImg, twCard, h1s, schemaTypes, intLinks: dest };
}

const rows = [];
for (const url of sitemapUrls) {
  const route = pathOf(url);
  const f = htmlOf(route);
  if (!existsSync(f)) { rows.push({ url, route, missing: true }); continue; }
  const e = extract(readFileSync(f, "utf8"));
  const noindex = /noindex/i.test(e.robotsMeta);
  const selfCanon = e.canonical === url;
  rows.push({ url, route, ...e, noindex, selfCanon });
}

const flags = [];
const ogFileExists = existsSync("public/brand/banner.png");
for (const r of rows) {
  if (r.missing) { flags.push(`[CRITICAL] ${r.route}: in sitemap but no rendered HTML`); continue; }
  if (r.noindex) flags.push(`[CRITICAL] ${r.route}: noindex robots meta`);
  if (!r.canonical) flags.push(`[CRITICAL] ${r.route}: missing canonical`);
  else if (!r.selfCanon) flags.push(`[WARN] ${r.route}: canonical (${r.canonical}) != sitemap URL`);
  if (!r.title) flags.push(`[CRITICAL] ${r.route}: missing <title>`);
  else if (r.title.length > 62) flags.push(`[INFO] ${r.route}: title ${r.title.length} chars (>62, may truncate)`);
  if (!r.desc) flags.push(`[WARN] ${r.route}: missing meta description`);
  else if (r.desc.length > 160) flags.push(`[INFO] ${r.route}: description ${r.desc.length} chars (>160)`);
  else if (r.desc.length < 70) flags.push(`[INFO] ${r.route}: description ${r.desc.length} chars (<70, thin)`);
  if (r.h1s.length === 0) flags.push(`[CRITICAL] ${r.route}: no H1`);
  else if (r.h1s.length > 1) flags.push(`[WARN] ${r.route}: ${r.h1s.length} H1 tags`);
  if (!r.ogImg) flags.push(`[WARN] ${r.route}: no og:image`);
  if (!r.twCard) flags.push(`[INFO] ${r.route}: no twitter:card`);
  if (r.intLinks.size < 3) flags.push(`[WARN] ${r.route}: only ${r.intLinks.size} internal links`);
  if (!r.schemaTypes.length) flags.push(`[CRITICAL] ${r.route}: no structured data`);
}

function dupes(key) {
  const map = {};
  rows.filter((r) => !r.missing).forEach((r) => { (map[r[key]] = map[r[key]] || []).push(r.route); });
  return Object.entries(map).filter(([, v]) => v.length > 1);
}
dupes("title").forEach(([t, rs]) => flags.push(`[WARN] Duplicate title (${rs.length}): "${t.slice(0, 40)}…" -> ${rs.join(", ")}`));
dupes("desc").forEach(([, rs]) => flags.push(`[WARN] Duplicate description (${rs.length}) -> ${rs.join(", ")}`));

const robotsAllowsAll = /Allow:\s*\/(\s|$)/i.test(robots) && !/^\s*Disallow:\s*\/\s*$/im.test(robots);
const robotsHasSitemap = /Sitemap:\s*\S+sitemap\.xml/i.test(robots);

const trunc = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s);
console.log("INDEXING READINESS — PER-URL TABLE");
console.log("(I?=indexable, S?=schema present, L=internal out-links incl. #contact)\n");
console.log(["#", "URL (path)".padEnd(38), "Title (trunc)".padEnd(34), "Desc", "Canon", "I?", "S?", "L"].join(" | "));
console.log("-".repeat(140));
let i = 0;
for (const r of rows) {
  i++;
  if (r.missing) { console.log(`${i} | ${r.route} | -- MISSING HTML --`); continue; }
  const ind = !r.noindex && r.canonical ? "Y" : "N";
  const sc = r.schemaTypes.length ? "Y" : "N";
  console.log([
    String(i).padStart(2),
    r.route.padEnd(38),
    trunc(r.title, 34).padEnd(34),
    (String(r.desc.length) + "c").padStart(4),
    r.selfCanon ? "self" : "DIFF",
    ind, sc, String(r.intLinks.size).padStart(2),
  ].join(" | "));
}

const ok = rows.filter((r) => !r.missing);
const cnt = (f) => ok.filter(f).length;
console.log(`\nFIELD COMPLETENESS (${ok.length} URLs)`);
console.log(`  Self-referencing canonical : ${cnt((r) => r.selfCanon)}/${ok.length}`);
console.log(`  Unique <title>             : ${new Set(ok.map((r) => r.title)).size}/${ok.length}`);
console.log(`  Has meta description       : ${cnt((r) => r.desc)}/${ok.length}`);
console.log(`  Unique meta description    : ${new Set(ok.map((r) => r.desc)).size}/${ok.length}`);
console.log(`  Exactly one H1             : ${cnt((r) => r.h1s.length === 1)}/${ok.length}`);
console.log(`  Has og:image               : ${cnt((r) => r.ogImg)}/${ok.length}`);
console.log(`  Has twitter:card           : ${cnt((r) => r.twCard)}/${ok.length}`);
console.log(`  Has structured data        : ${cnt((r) => r.schemaTypes.length)}/${ok.length}`);
console.log(`  Indexable (no noindex)     : ${cnt((r) => !r.noindex && r.canonical)}/${ok.length}`);
console.log(`  Internal links >= 3        : ${cnt((r) => r.intLinks.size >= 3)}/${ok.length}`);
console.log(`  Internal links range       : ${Math.min(...ok.map((r) => r.intLinks.size))}–${Math.max(...ok.map((r) => r.intLinks.size))} per page`);

console.log(`\nROBOTS.TXT`);
console.log(`  Allows crawling of /       : ${robotsAllowsAll ? "YES" : "NO"}`);
console.log(`  References sitemap.xml      : ${robotsHasSitemap ? "YES" : "NO"}`);
robots.trim().split("\n").forEach((l) => console.log("    " + l));

console.log(`\nOG IMAGE FILE`);
console.log(`  public/brand/banner.png exists: ${ogFileExists ? "YES" : "NO (og:image will 404)"}`);

console.log(`\nFLAGS (${flags.length})`);
if (!flags.length) console.log("  NONE — all checks passed");
else flags.forEach((f) => console.log("  " + f));
