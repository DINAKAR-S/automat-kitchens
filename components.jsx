/* global React */
const { useState, useEffect, useRef } = React;

// ─── Glyph icon library (line icons matching brand) ────────────────────
function Glyph({ name, size = 28 }) {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "compass":  return (<svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>);
    case "diamond":  return (<svg viewBox="0 0 24 24" {...s}><path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18M9 9l3 12M15 9l-3 12M8 3l-2 6M16 3l2 6"/></svg>);
    case "hands":    return (<svg viewBox="0 0 24 24" {...s}><path d="M7 11V6a2 2 0 014 0v5M11 11V4a2 2 0 014 0v7M15 11V6a2 2 0 014 0v8a7 7 0 01-7 7h-2a7 7 0 01-7-7v-2a2 2 0 114 0"/></svg>);
    case "anchor":   return (<svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="5" r="2"/><path d="M12 7v14M5 14a7 7 0 0014 0M3 14h4M17 14h4"/></svg>);
    case "star":     return (<svg viewBox="0 0 24 24" {...s}><path d="M12 3l2.7 5.5 6 .9-4.4 4.2 1.1 6L12 16.8 6.6 19.6l1.1-6L3.3 9.4l6-.9z"/></svg>);
    case "compare":  return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="8" height="14" rx="1.5"/><rect x="13" y="9" width="8" height="10" rx="1.5"/><path d="M7 9v6M17 13v2"/></svg>);
    case "stethoscope": return (<svg viewBox="0 0 24 24" {...s}><path d="M5 3v6a4 4 0 008 0V3M5 3h2M11 3h2M9 13v3a4 4 0 008 0v-2"/><circle cx="17" cy="9" r="2"/></svg>);
    case "shield":   return (<svg viewBox="0 0 24 24" {...s}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>);
    case "boxes":    return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>);
    case "gear":     return (<svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>);
    case "mail":     return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>);
    case "phone":    return (<svg viewBox="0 0 24 24" {...s}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"/></svg>);
    case "pin":      return (<svg viewBox="0 0 24 24" {...s}><path d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>);
    case "wa":       return (<svg viewBox="0 0 24 24" fill="white"><path d="M12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.4A10 10 0 1012 2zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.3-.5.1-1.1.1-1.7-.1-.4-.1-1-.3-1.6-.6-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.3.4-.4.4c-.1.1-.3.3-.1.5.2.4.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.5 1.6.3.1.5.1.6 0l.8-.9c.2-.3.4-.2.6-.1.3.1 1.7.8 1.9.9.3.1.5.2.6.3.1.2.1.7-.1 1.3z"/></svg>);
    default: return null;
  }
}

window.Glyph = Glyph;
