# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Ruflo Integration
When working on multi-file tasks or complex features, use ToolSearch to find and invoke ruflo MCP tools.
Key tools: `mcp__claude-flow__memory_store`, `mcp__claude-flow__memory_search`, `mcp__claude-flow__hooks_route`, `mcp__claude-flow__swarm_init`, `mcp__claude-flow__agent_spawn`.
Check system-reminder tags for [INTELLIGENCE] pattern suggestions before starting work.

## RTK (Rust Token Killer)
RTK v0.37.2 is active on all Bash commands via global PreToolUse hook (`rtk hook claude`).
Token savings are applied automatically — no manual invocation needed.
Run `rtk gain` to see token savings analytics. Run `rtk gain --history` for command usage history.

## Caveman Mode
Ultra-compressed communication skill is available. Invoke `/caveman` or say "caveman mode" to activate.
Levels: `lite` (no filler), `full` (default, drop articles/fragments OK), `ultra` (abbreviate + arrows).
~75% token reduction while maintaining full technical accuracy. Code blocks stay unchanged.

## Tools & Integrations
- **claude-flow MCP**: Configured in `.mcp.json`. Provides swarm coordination, memory, neural patterns, and agent orchestration.
- **RTK**: Globally active, transparent bash command token optimization.
- **Caveman**: Skill-based communication compression, on-demand.

---

## Project Overview

Static marketing website for **Automat Kitchens** (commercial kitchen equipment company, Kuwait). No build system — React and Babel run entirely in the browser via CDN. To preview, open `index.html` directly in a browser or serve the directory with any static file server:

```bash
# Any of these work:
npx serve .
python -m http.server 8080
```

## Architecture

The site is a single-page React app assembled from five script files loaded by `index.html` in order. Babel transpiles JSX in-browser at runtime. There is no bundler, no `package.json`, no TypeScript.

**Load order matters** — each file depends on globals defined by the files before it:

| File | Role | Exports (via `window.*`) |
|---|---|---|
| `tweaks-panel.jsx` | Design customization panel + edit-mode protocol | `TweaksPanel`, `useTweaks`, `TweakSection`, `TweakColor`, `TweakRadio`, `TweakToggle` |
| `data.jsx` | Static asset paths and content data | `A` (image/video paths), `PARTNERS_A`, `PARTNERS_B`, `RESTO_CATS` |
| `components.jsx` | Shared SVG icon primitives | `Glyph` |
| `sections.jsx` | All page sections as React components | `Nav`, `Hero`, `Manifesto`, `Expertise`, `Showcase`, `Resto`, `Delivery`, `Partners`, `Contact`, `WhatsAppFloat` |
| `app.jsx` | Root `App` component + `ReactDOM.createRoot` | — |

### Theming System

`app.jsx` holds `TWEAK_DEFAULTS` (delimited by `/*EDITMODE-BEGIN*/` … `/*EDITMODE-END*/` for external tooling):

- **`atmosphere`** — background gradient preset: `charcoal` | `midnight` | `ember` | `bone`
- **`accent`** — CSS custom property `--gold`, defaults `#C9A84C`
- **`grain`** — toggles a `.grain` film-grain overlay

`useTweaks` (from `tweaks-panel.jsx`) manages state and wires the floating tweaks panel. `TweaksPanel` responds to `window.postMessage` events `__activate_edit_mode` / `__deactivate_edit_mode` for external preview tooling.

### Key Patterns

- **Global sharing instead of imports** — because there are no ES modules, all cross-file symbols are attached to `window` and consumed via JSDoc `/* global … */` comments at the top of each file.
- **Intersection Observer autoplay** — `useInViewVideo(threshold)` in `sections.jsx` returns `[containerRef, videoRef]` and handles play/pause automatically when a `<video>` scrolls into view.
- **Asset map** — all image/video paths live in `data.jsx → A.img` and `A.vid`. Add new assets there, not inline.
- **Inline SVG icons** — `Glyph` (in `components.jsx`) is for full-size brand icons; `Ico` (local to `sections.jsx`) is for small UI icons. Both are plain SVG, no icon font.

### CSS

`styles.css` (~37 KB) holds all styles. There are no CSS modules or preprocessors. The `--gold` variable is the primary accent; it's set dynamically from the tweaks system.

`tweaks-panel.jsx` injects its own styles via a `<style>` tag at runtime (the `__TWEAKS_STYLE` constant) — do not add tweaks-panel styles to `styles.css`.
