# Automat Kitchens Co. — Complete Color Schema & Visual Identity
> **Extracted live from:** https://www.automatkitchensco.com/  
> **Method:** JavaScript computed styles + DOM analysis via Chrome DevTools  
> **Date:** April 29, 2026

---

## 🎨 Full Color Palette

### Primary Colors

| Role | Hex | RGB | Visual | Usage |
|------|-----|-----|--------|-------|
| **Deep Navy / Brand Blue** | `#14194E` | rgb(20, 25, 78) | 🟦 | Core Values cards bg, section headings, `.cor-hd` text, `.hm-cnt-hd` |
| **Pure Black** | `#000000` | rgb(0, 0, 0) | ⬛ | All section backgrounds, mobile menu, back-to-top btn |
| **Near Black** | `#121212` | rgb(18, 18, 18) | ⬛ | Offcanvas / mobile nav drawer |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | ⬜ | Body bg, card backgrounds, all headline text, hero text |

### Secondary / Accent Colors

| Role | Hex | RGB | Visual | Usage |
|------|-----|-----|--------|-------|
| **Warm Grey (Body Text)** | `#6B6868` | rgb(107, 104, 104) | 🩶 | Primary body text — **123 elements** (most used color on site) |
| **Light Grey (Section BG)** | `#F8F9FA` | rgb(248, 249, 250) | 🤍 | User Experience section bg, all `.btn-light` buttons |
| **Bootstrap Charcoal** | `#212529` | rgb(33, 37, 41) | ⬛ | Bootstrap default dark text fallback |
| **Grey Variant** | `#686868` | rgb(104, 104, 104) | 🩶 | Subtle text variant |

### Functional / Highlight Colors

| Role | Hex | RGB | Visual | Usage |
|------|-----|-----|--------|-------|
| **Danger / Resto Red** | `#EE3124` | rgb(238, 49, 36) | 🔴 | Resto nav link `.nav-link.rest`, category labels in Resto page |
| **WhatsApp Green** | `#4AAE20` | rgb(74, 174, 32) | 🟢 | WhatsApp floating button background |
| **Bootstrap Blue** | `#0D6EFD` | rgb(13, 110, 253) | 🔵 | Default link color (Bootstrap, minimal use) |

---

## 🔤 Typography System

### Font Family

```
PRIMARY FONT:   "GT Haptik" (custom typeface)
FALLBACK:       Plus Jakarta Sans (Google Fonts — loaded as web fallback)
FALLBACK 2:     sans-serif

Google Fonts URL loaded:
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap
```

> **GT Haptik** is a premium geometric sans-serif by Grilli Type (Swiss type foundry). It has a technical, confident character — well-suited to B2B industrial brands. Used across ALL elements at every size.

---

### Type Scale

| Element | Size | Weight | Line Height | Color | Notes |
|---------|------|--------|-------------|-------|-------|
| `h1` | **48px** | 700 (Bold) | 52.8px (1.1×) | `#FFFFFF` | Hero headline |
| `h2` | **52.8px** | 700 (Bold) | 58.08px (1.1×) | `#FFFFFF` | Section headings |
| `.cor-hd` headings | **52.8px** | 700 (Bold) | — | `#14194E` or `#FFFFFF` | Core section labels |
| `.hm-cnt-hd` | **48px** | 700 (Bold) | — | `#14194E` | Contact heading |
| `a` links | **22.4px** | 600 (SemiBold) | 39px | `#FFFFFF` | Nav + CTA links |
| `span` | **20px** | 400 (Regular) | 20px | `#000000` | Hero overlay text |
| `p` body | **16px** | 400 (Regular) | 22px (1.375×) | `#6B6868` | All body copy |
| `.btn-light` | **20px** | 400 (Regular) | — | `#000000` | CTA buttons |

> **Note:** H3 and H4 tags are **not used** anywhere on the site — hierarchy skips directly from H2 to paragraph text.

---

## 🧩 Component Design Tokens

### Buttons

```css
/* Primary CTA — .btn.btn-light.btn-lg */
background-color: #F8F9FA;
color:            #000000;
border:           0.8px solid #F8F9FA;
border-radius:    8px;
padding:          8px 16px;
font-size:        20px;
font-weight:      400;
font-family:      "GT Haptik", sans-serif;

/* Button includes arrow icon: images/arrw-rgt.svg (25×25px) */
```

> ⚠️ **Only one button style exists** on the entire site — `.btn-light`. No primary filled button, no dark CTA, no outlined variant. This is a major design gap.

---

### Cards — Core Values (`.cor-inn`)

```css
background-color: #14194E;          /* Deep Navy */
border-radius:    8px;
padding:          20px 10px;
box-shadow:       rgba(0, 0, 0, 0.15) 0px 8px 16px 0px;
color:            #6B6868;          /* grey text on navy — low contrast */
font-size:        16px;
```

---

### Cards — User Experience (`.user_exp_w`)

```css
background-color: #FFFFFF;
border-radius:    8px;
padding:          24px 8px;
section-bg:       #F8F9FA;          /* parent .bg-light */
```

---

### Cards — Contact Blocks (`.hm-cnt-ar`)

```css
background-color: #000000;
border-radius:    8px;
padding:          16px;
color:            #FFFFFF;
```

---

### Mobile Navigation (Offcanvas)

```css
background-color: #000000;
width:            400px;
color:            #FFFFFF;
```

---

### WhatsApp Floating Button (`.wts-app`)

```css
background-color: #4AAE20;          /* WhatsApp brand green */
position:         fixed;
/* Contains: images/whatsapp-icon.svg */
```

---

## 🖼️ Background Images (Per Section)

Every full-page section uses a dark `#000000` base with a background photo layered on top via CSS `background-image`:

| Section / Class | Background Image | Section ID |
|----------------|-----------------|------------|
| Logo / Banner area | `images/banner.jpg` | (initial section) |
| Hero — Automat Kitchen | `images/amk-img.jpg` | `#slide_1` |
| Hero — Resto Store | `images/hm-rest.jpg` | `#slide_2` |
| Hero — Spare Parts | `images/hm-spr-img-bg.jpg` | `#slide_3` |
| Core Values section | `images/core_value_bg.jpg` | `#slide_4` |
| About — "Rethink Your Kitchen" | `images/hm-abo.jpg` | `#slide_5` |
| User Experience | *(no image — #F8F9FA bg)* | `#slide_6` |
| Contact | *(no image — #000000 bg)* | `#slide_7` |

---

## 📐 Layout & Spacing System

```
Framework:        Bootstrap 5
Container:        .container (standard) + .container-xxl (wider hero sections)
Grid:             Bootstrap 12-col grid
Scroll behavior:  Full-page vertical scrolling (.vertical-scrolling sections)
Section padding:  Core Values — 48px 0px (py-3 py-lg-5)
                  About — 45px 0px
                  Contact — 16px 0px

Border radius used: 8px consistently (rounded-3 = Bootstrap's 8px)
Card shadow:       rgba(0,0,0,0.15) 0px 8px 16px 0px
```

---

## 🧭 Navigation Structure

```
NAV LINKS (5 items):
  Home          → /index.htm         [color: default white]
  Automat Kitchens → /projects.htm   [color: default white]
  Resto         → /resto.htm         [color: #EE3124 RED — special treatment]
  Spareparts    → /spareparts.htm    [color: default white]
  Contact       → /contact-us.php    [color: default white]

ICONS USED:
  arrw-rgt.svg     (CTA button arrow — right)
  ico1–5.svg       (Core Values icons)
  ue-ico1–5.svg    (User Experience icons)
  whatsapp-icon.svg (floating button)

ANIMATION CLASSES:
  .animation-element .drop_eff2 .animated1 .in-view
  Applied to: hero text block, about section paragraph
  Effect: Drop/fade-in animation on scroll into view
```

---

## 🎭 Design Personality Analysis

Based on the extracted values, Automat Kitchens' current visual identity reads as:

| Attribute | Current State | Interpretation |
|-----------|--------------|----------------|
| **Mood** | Dark + photographic | Industrial, serious, professional |
| **Primary feel** | Full-bleed dark photo sections | Cinematic, immersive |
| **Brand accent** | `#14194E` Navy | Trust, authority, B2B corporate |
| **Typography** | GT Haptik (premium) | High confidence, modern Swiss design |
| **Contrast strategy** | Dark sections + white text | High impact, readable |
| **Weakness** | Only 1 button style, grey body text on navy cards | Low contrast, no visual hierarchy on CTAs |
| **Consistency** | High — same font/color throughout | Good brand discipline |

---

## ⚠️ Current Design Issues (Identified from Tokens)

### 1. Low Contrast on Core Values Cards
```
Background: #14194E  (Navy)
Text color: #6B6868  (Warm grey)
WCAG contrast ratio: ~2.8:1  ← FAILS AA standard (requires 4.5:1)
Fix: Change card text to #FFFFFF or #E0E0E0
```

### 2. Single Button Style
```
Only .btn-light exists — light grey bg, black text
No dark/filled CTA button variant
No color contrast between button and dark hero sections (grey-on-black is weak)
Fix: Add a primary button: #14194E bg + #FFFFFF text
     Add an accent button: #EE3124 bg + #FFFFFF text
```

### 3. Body Text Color Too Muted
```
#6B6868 at 16px on white = contrast ratio ~4.6:1 (barely passes AA)
On dark/navy backgrounds this fails entirely
Fix: Use #FFFFFF or #F0F0F0 for text on dark backgrounds
```

### 4. No CSS Custom Properties / Variables
```
No :root variables found — all values are hardcoded
Makes theming, dark mode, or future updates difficult
Fix: Implement CSS custom properties for all tokens
```

### 5. Missing Typography Levels
```
H3 and H4 not defined or used anywhere
Creates flat information hierarchy
Fix: Define h3 (28px), h4 (22px), and label (11px uppercase) styles
```

---

## ✅ Design Strengths to Keep

1. **GT Haptik font** — premium, distinctive, technical — keep it as primary
2. **#14194E Navy** — strong brand identity color, unique in the Kuwait kitchen market — keep and expand
3. **Full-bleed photography sections** — cinematic feel, keep the approach
4. **`8px` border radius** — consistent and modern, keep
5. **`rgba(0,0,0,0.15) 0px 8px 16px 0px` card shadow** — elegant and subtle, keep

---

## 🔧 Recommended Token Updates for New Site

```css
:root {
  /* ── BRAND ── */
  --brand-navy:        #14194E;   /* Primary brand — keep from current site */
  --brand-navy-light:  #1E2660;   /* Lighter hover variant */
  --brand-navy-dark:   #0D1038;   /* Darker pressed variant */

  /* ── ACCENT (ADD — currently missing) ── */
  --accent-red:        #EE3124;   /* Already used for Resto — formalize */
  --accent-gold:       #C9A84C;   /* ADD — Kuwait luxury feel, complements navy */

  /* ── NEUTRAL ── */
  --white:             #FFFFFF;
  --off-white:         #F8F6F3;   /* Warmer than F8F9FA Bootstrap grey */
  --light-grey:        #F8F9FA;   /* Keep Bootstrap light for subtle bg */
  --body-text:         #6B6868;   /* Keep — is the brand's grey voice */
  --dark-text:         #1A1A1A;   /* ADD — for better contrast on light bg */
  --black:             #000000;

  /* ── FUNCTIONAL ── */
  --whatsapp:          #4AAE20;   /* Keep — WhatsApp brand green */
  --error:             #EE3124;
  --success:           #2D7A4F;

  /* ── TYPOGRAPHY ── */
  --font-primary:      "GT Haptik", "Plus Jakarta Sans", sans-serif;
  --font-arabic:       "Cairo", sans-serif;     /* ADD for AR version */

  /* ── TYPE SCALE ── */
  --text-hero:         56px;    /* bumped from 48px */
  --text-h1:           48px;    /* keep */
  --text-h2:           36px;    /* reduced from 52.8 — better hierarchy */
  --text-h3:           28px;    /* ADD — currently missing */
  --text-h4:           22px;    /* ADD — currently missing */
  --text-body:         16px;    /* keep */
  --text-small:        14px;    /* ADD */
  --text-label:        11px;    /* ADD — for section labels, uppercase */

  /* ── SPACING ── */
  --radius-sm:         4px;
  --radius-md:         8px;     /* keep — current standard */
  --radius-lg:         16px;
  --radius-xl:         24px;

  /* ── SHADOWS ── */
  --shadow-card:       rgba(0, 0, 0, 0.15) 0px 8px 16px 0px;  /* keep */
  --shadow-hover:      rgba(0, 0, 0, 0.25) 0px 16px 32px 0px; /* ADD */
}
```

---

## 📊 Color Usage Summary

```
Most used text color:    #6B6868 Warm Grey    (123 elements — 49% of all text)
Second text color:       #FFFFFF White         (51 elements  — 20%)
Third text color:        #000000 Black         (31 elements  — 12%)
Brand accent in text:    #14194E Navy          (9 elements   — 4%)

Most used bg color:      #000000 Black         (sections — all dark)
Second bg color:         #FFFFFF White         (body, cards)
Third bg color:          #F8F9FA Light Grey    (UX section, buttons)
Brand bg:                #14194E Navy          (Core Values cards only — 5 elements)
```

---

*Extracted via Chrome JavaScript computed style analysis — automatkitchensco.com — April 29, 2026*
