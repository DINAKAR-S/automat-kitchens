/* global React */
const { useState, useEffect, useRef, useMemo } = React;

// ─── Real generated assets ─────────────────────────────────────────────────
const A = {
  img: {
    hero:       "assets/img/01-hero-pot.jpg",
    saucepans:  "assets/img/02-saucepans.jpg",
    blueprint:  "assets/img/03-blueprint.jpg",
    warehouse:  "assets/img/04-warehouse.jpg",
    install:    "assets/img/05-install.jpg",
    maintain:   "assets/img/06-maintain.jpg",
    marriott:   "assets/img/07-marriott.jpg",
    salhiya:    "assets/img/08-salhiya.jpg",
    lepain:     "assets/img/09-lepain.jpg",
    burgan:     "assets/img/10-burgan.jpg",
    resto:      "assets/img/11-resto.jpg",
    partners:   "assets/img/12-partners.jpg",
  },
  vid: {
    heroLoop:   "assets/vid/01-hero-loop.mp4",
    steam:      "assets/vid/02-steam.mp4",
    blueprint:  "assets/vid/03-blueprint.mp4",
    install:    "assets/vid/04-install.mp4",
    knife:      "assets/vid/05-knife.mp4",
    mibrasa:    "assets/vid/06-mibrasa.mp4",
    pour:       "assets/vid/07-pour.mp4",
  },
};

// ─── Manufacturer brand partners ───────────────────────────────────────────
const PARTNERS_A = [
  { name: "Rational",     country: "Germany" },
  { name: "Hobart",       country: "USA" },
  { name: "Electrolux",   country: "Sweden" },
  { name: "Winterhalter", country: "Germany" },
  { name: "Robot Coupe",  country: "France" },
  { name: "Salvis",       country: "Switzerland" },
  { name: "MKN",          country: "Germany" },
  { name: "Fagor",        country: "Spain" },
  { name: "Frima",        country: "Switzerland" },
  { name: "Convotherm",   country: "Germany" },
];
const PARTNERS_B = [
  { name: "Fri-Jado",     country: "Netherlands" },
  { name: "Lainox",       country: "Italy" },
  { name: "Bonnet",       country: "France" },
  { name: "Manitowoc",    country: "USA" },
  { name: "Berkel",       country: "Italy" },
  { name: "Vulcan",       country: "USA" },
  { name: "Falcon",       country: "UK" },
  { name: "Sammic",       country: "Spain" },
  { name: "Polaris",      country: "Italy" },
  { name: "Kromo",        country: "Italy" },
];

const RESTO_CATS = [
  { id: "01", name: "Knives",                video: A.vid.knife,  poster: A.img.hero,    sub: "Razor-sharp Japanese & European" },
  { id: "02", name: "Pots & Pans",           video: A.vid.pour,   poster: A.img.saucepans, sub: "Heavy-base, heat-true 18/10" },
  { id: "03", name: "Storesafe & Shelving",  video: null,         poster: A.img.resto,   sub: "Modular stainless storage" },
  { id: "04", name: "Bakeware",              video: null,         poster: A.img.lepain,  sub: "Pastry-grade, oven-safe" },
  { id: "05", name: "Dinnerware",            video: null,         poster: A.img.salhiya, sub: "Hospitality-spec porcelain" },
  { id: "06", name: "Cutlery",               video: null,         poster: A.img.partners, sub: "Mirror-polish flatware" },
];

window.A = A;
window.PARTNERS_A = PARTNERS_A;
window.PARTNERS_B = PARTNERS_B;
window.RESTO_CATS = RESTO_CATS;
