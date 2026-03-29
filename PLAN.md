# Upgrade Plan for security-class.gr

The course content is preserved as-is for historical reasons. This plan only covers
keeping the **website itself functional** — no content modernization.

All items completed.

## 1. Fix slide download links — DONE
Updated `main.md` to point to `dionyziz/security-class` on `gh-pages` branch.

## 2. Fix broken CSS (`style.css:138-139`) — DONE
Added missing `padding-bottom: 20px;` value.

## 3. Drop jQuery dependency — DONE
Rewrote `behavior.js` to use `fetch()` and `document.querySelector()`. Removed jQuery `<script>` tag from `index.html`.

## 4. Replace `setInterval` polling with `hashchange` event — DONE
`behavior.js` now uses `window.addEventListener('hashchange', ...)`.

## 5. Remove vendor-prefixed CSS and prefixfree.js — DONE
Removed 5 prefixed gradient lines from `style.css`. Removed `prefixfree.min.js` `<script>` tag from `index.html`.

## 6. Clean up dead code in `behavior.js` — DONE
Removed `cube` object, `customHTML`, `contentLoaded`, and `iframe` variable.

## 7. Fix `flowers/` page — DONE
Updated `flowers.js` to use `fetch()` and `https://` Gravatar URLs. Added error handling for the dead `wall_of_shame.html` endpoint. Removed jQuery from `flowers/index.html`.

## 8. Add `<meta name="viewport">` for mobile — DONE
Added to both `index.html` and `flowers/index.html`.

## 9. Add SRI hashes to external scripts — N/A
jQuery dependency was removed entirely (item 3), so no external scripts remain.
