/* global React, A, PARTNERS_A, PARTNERS_B, RESTO_CATS */
const { useState, useEffect, useRef } = React;

// ─── Tiny line icons ────────────────────────────────────────────────────
const Ico = {
  arrow: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>,
  arrowDown: () => <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M6 1V13M6 13L1 8M6 13L11 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>,
  pin: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1C4.5 1 2.5 3 2.5 5.5C2.5 9 7 13 7 13C7 13 11.5 9 11.5 5.5C11.5 3 9.5 1 7 1Z M7 6.5C7.55 6.5 8 6.05 8 5.5C8 4.95 7.55 4.5 7 4.5C6.45 4.5 6 4.95 6 5.5C6 6.05 6.45 6.5 7 6.5Z" stroke="currentColor" strokeWidth="1.2"/></svg>,
  phone: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 1H5L6 4L4.5 5C5.5 7 7 8.5 9 9.5L10 8L13 9V11C13 12 12 13 11 13C6 13 1 8 1 3C1 2 2 1 3 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>,
  mail: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" stroke="currentColor" strokeWidth="1.2"/><path d="M1 4L7 8L13 4" stroke="currentColor" strokeWidth="1.2"/></svg>,
  clock: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/><path d="M7 3V7L9.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  play: () => <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M3 2L12 7L3 12V2Z"/></svg>,
};

// helper: autoplay video when in view
function useInViewVideo(threshold = 0.3) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!videoRef.current) return;
        if (e.isIntersecting) videoRef.current.play().catch(() => {});
        else videoRef.current.pause();
      });
    }, { threshold });
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [threshold]);
  return [containerRef, videoRef];
}

// ─── NAV ────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a href="#hero" className="brand">
        <span className="brand-mark">A</span>
        <div className="brand-stack">
          <span className="brand-name">Automat</span>
          <span className="brand-sub">Kitchens · KW · Est. 2003</span>
        </div>
      </a>
      <div className="links">
        <a href="#expertise"><i>01</i>Expertise</a>
        <a href="#showcase"><i>02</i>Projects</a>
        <a href="#resto" className="resto"><i>03</i>Resto</a>
        <a href="#partners"><i>04</i>Partners</a>
        <a href="#contact"><i>05</i>Contact</a>
      </div>
      <a href="#contact" className="cta">
        <span className="dot"></span>
        Start a Project
      </a>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────
function Hero() {
  const vRef = useRef(null);
  const [time, setTime] = useState("");
  useEffect(() => {
    if (vRef.current) vRef.current.play().catch(() => {});
    const tick = () => {
      const now = new Date(Date.now() + 3 * 3600 * 1000); // KW = UTC+3
      setTime(now.toUTCString().slice(17, 22) + " AST");
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="hero" className="hero">
      {/* Full-bleed video */}
      <div className="hero-video">
        <video ref={vRef} src={A.vid.heroLoop} poster={A.img.hero} autoPlay muted loop playsInline preload="auto"/>
        <div className="hero-vignette"></div>
      </div>

      {/* Top HUD bar */}
      <div className="hero-topbar">
        <div className="topbar-cell">
          <span className="k">Coordinates</span>
          <span className="v">29.378° N · 47.990° E</span>
        </div>
        <div className="topbar-cell">
          <span className="k">Site</span>
          <span className="v">Shuwaikh Industrial · Block 2</span>
        </div>
        <div className="topbar-cell">
          <span className="k">Live</span>
          <span className="v"><span className="pulse"></span>{time || "Kuwait"}</span>
        </div>
        <div className="topbar-cell">
          <span className="k">Reel</span>
          <span className="v">01 · Hero loop · 24fps</span>
        </div>
      </div>

      {/* Side rail with vertical rule */}
      <div className="hero-rail">
        <span className="rail-num">N°01</span>
        <div className="rail-line"></div>
        <span className="rail-label">CHAPTER · INTRODUCTION</span>
      </div>

      {/* Centerpiece title */}
      <div className="hero-stage">
        <h1 className="hero-headline">
          <span className="line-a">The stainless</span>
          <span className="line-b"><em>atlas</em> of</span>
          <span className="line-c">Kuwait's finest</span>
          <span className="line-d">kitchens<i>.</i></span>
        </h1>

        <div className="hero-foot">
          <div className="foot-lede">
            Two decades engineering commercial kitchens — from boutique cafés
            to thousand-cover banquet lines. <span className="thin">One accountable name from blueprint to twentieth-year service.</span>
          </div>
          <div className="foot-cta">
            <a href="#showcase" className="btn-prim">
              <span>View 86 Projects</span>
              <span className="btn-arr"></span>
            </a>
            <a href="#contact" className="btn-ghost">
              <Ico.play /><span>Reel · 2:18</span>
            </a>
          </div>
        </div>
      </div>

      {/* Edge stats */}
      <div className="hero-edge">
        <div className="edge-stat">
          <span className="big">86</span>
          <span className="lbl">Projects<br/>commissioned</span>
        </div>
        <div className="edge-stat">
          <span className="big">68</span>
          <span className="lbl">Manufacturer<br/>partners</span>
        </div>
        <div className="edge-stat">
          <span className="big">20<em>yr</em></span>
          <span className="lbl">After-sales<br/>horizon</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue">
        <span className="cue-rule"></span>
        <span>Scroll for the chapters</span>
      </div>

      {/* Marquee strip */}
      <div className="hero-strip">
        <div className="strip-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div className="strip-row" key={k}>
              <span>Design</span><span className="dot">/</span>
              <span>Supply</span><span className="dot">/</span>
              <span>Install</span><span className="dot">/</span>
              <span>Maintain</span><span className="dot">●</span>
              <span>Resto Showroom</span><span className="dot">/</span>
              <span>OEM Spareparts</span><span className="dot">/</span>
              <span>+965 60766633</span><span className="dot">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MANIFESTO — quiet text break before chapters ──────────────────────
function Manifesto() {
  return (
    <section className="manifesto">
      <div className="wrap">
        <div className="manifesto-grid">
          <div className="m-meta">
            <span>Manifesto</span>
            <span>—</span>
            <span>2026</span>
          </div>
          <p className="m-body">
            A working kitchen is an <em>instrument</em>. It must be tuned for
            the menu, the room, the hours, the people. <span className="dim">Off-the-shelf does not feed
            a thousand covers; bargain installs do not survive a Kuwait summer.</span> We
            engineer kitchens that hold their note — for two decades — across
            <span className="ser"> design, supply, install</span> and the long, quiet work of <span className="ser">maintenance</span>.
          </p>
          <div className="m-sign">
            <div className="sig">— Automat Kitchens W.L.L.</div>
            <div className="sig-sub">Shuwaikh · Kuwait</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERTISE ──────────────────────────────────────────────────────────
function Expertise() {
  const items = [
    { num: "I",   title: "Design",   ser: "drawn",        body: "3D CAD planning, workflow modelling, capacity calculation, permit-ready drawings.", img: A.img.blueprint, vid: A.vid.blueprint, owner: "In-house architects", horizon: "Project lifecycle" },
    { num: "II",  title: "Supply",   ser: "sourced",      body: "Sixty-eight manufacturer partners across Europe, the United States, Asia.",          img: A.img.warehouse, vid: A.vid.steam,    owner: "Direct from OEM",    horizon: "Bonded warehouse" },
    { num: "III", title: "Install",  ser: "fitted",       body: "Site-trained crew. Ducting, gas, drainage, electricals — tested before sign-off.",  img: A.img.install,   vid: A.vid.install,   owner: "Automat field crew", horizon: "Commissioning + 12mo" },
    { num: "IV",  title: "Maintain", ser: "kept running", body: "OEM-genuine spareparts and field service across a twenty-year horizon.",             img: A.img.maintain,  vid: null,           owner: "Service contracts",  horizon: "20-year coverage" },
  ];
  return (
    <section id="expertise" className="expertise">
      <div className="wrap">
        <div className="chap-head">
          <div className="chap-num">
            <span>Chapter</span>
            <span className="rom">I</span>
          </div>
          <h2 className="chap-title">
            Four <em>disciplines.</em><br/>
            <span className="thin">One signature.</span>
          </h2>
          <p className="chap-lede">
            Most suppliers hand the keys over and disappear. We don't. From the
            first floor-plan sketch to the last bearing replacement twenty years
            on — Automat is the single accountable name on the schedule.
          </p>
        </div>
      </div>

      <div className="exp-list">
        {items.map((it, i) => <ExpItem key={it.num} item={it} index={i}/>)}
      </div>
    </section>
  );
}

function ExpItem({ item, index }) {
  const [containerRef, videoRef] = useInViewVideo(0.4);
  const reverse = index % 2 === 1;
  return (
    <article ref={containerRef} className={"exp-item" + (reverse ? " reverse" : "")}>
      <div className="exp-stripe">
        <span className="ix">{String(index + 1).padStart(2, "0")} / 04</span>
      </div>

      <div className="exp-grid">
        <div className="exp-media">
          {item.vid ? (
            <video ref={videoRef} src={item.vid} poster={item.img} muted loop playsInline preload="metadata"/>
          ) : (
            <img src={item.img} alt={item.title} loading="lazy"/>
          )}
          <div className="exp-tag">
            <span className="tg-num">{item.num}</span>
            <span className="tg-bar"></span>
            <span className="tg-name">{item.title.toUpperCase()}</span>
          </div>
        </div>
        <div className="exp-body">
          <div className="exp-rom">{item.num}</div>
          <h3>
            {item.title}
            <span className="ser">— {item.ser}.</span>
          </h3>
          <p className="exp-lede">{item.body}</p>
          <div className="exp-meta">
            <div><span className="k">Owner</span><strong>{item.owner}</strong></div>
            <div><span className="k">Horizon</span><strong>{item.horizon}</strong></div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── SHOWCASE ───────────────────────────────────────────────────────────
function Showcase() {
  const cases = [
    { img: A.img.marriott, vid: null,           tag: "Marriott Hotel · Kuwait City",    name: "The Marriott", ser: "banquet line",     desc: "1,200-cover banquet kitchen with twin combi-suites and integrated holding cabinets.", scope: "Design · Supply · Install", year: "2022", capacity: "1,200 covers", duration: "9 months" },
    { img: A.img.salhiya,  vid: A.vid.mibrasa,  tag: "Salhiya Complex · Restaurant",    name: "Salhiya",      ser: "fine dining",      desc: "Open-pass kitchen built around a Mibrasa charcoal oven and à-la-carte cold line.",     scope: "Design · Supply · Install · Maintain", year: "2023", capacity: "180 covers", duration: "5 months" },
    { img: A.img.lepain,   vid: null,           tag: "Le Pain · Café & Patisserie",     name: "Le Pain",      ser: "patisserie",       desc: "Pastry-grade bakery with deck ovens, retarder-provers and vacuum cooling.",             scope: "Design · Supply · Install", year: "2023", capacity: "All-day service", duration: "4 months" },
    { img: A.img.burgan,   vid: A.vid.pour,     tag: "Burgan · Central Catering",       name: "Burgan",       ser: "central catering", desc: "Industrial central kitchen — bratt pans, vac-pac, blast chillers, dishwash tunnel.",  scope: "Full-suite contract", year: "2024", capacity: "5,000 meals/day", duration: "11 months" },
  ];
  return (
    <section id="showcase" className="showcase">
      <div className="wrap">
        <div className="chap-head">
          <div className="chap-num">
            <span>Chapter</span>
            <span className="rom">II</span>
          </div>
          <h2 className="chap-title">
            Eighty-six <em>commissioned</em><br/>
            <span className="thin">kitchens — selected.</span>
          </h2>
          <p className="chap-lede">
            A reading library of the work. Hover any plate to see the room come
            alive — these are the kitchens we still answer the phone for.
          </p>
        </div>

        <div className="show-stack">
          {cases.map((c, i) => <ShowItem key={i} c={c} i={i}/>)}
        </div>
      </div>
    </section>
  );
}

function ShowItem({ c, i }) {
  const [containerRef, videoRef] = useInViewVideo(0.35);
  return (
    <article ref={containerRef} className="show-item">
      <div className="show-num">N°{String(i + 1).padStart(2, "0")}</div>

      <div className="show-grid">
        <div className="show-media">
          {c.vid ? (
            <video ref={videoRef} src={c.vid} poster={c.img} muted loop playsInline preload="metadata"/>
          ) : (
            <img src={c.img} alt={c.name} loading="lazy"/>
          )}
          <div className="show-tag">{c.tag}</div>
          <div className="show-corner tl"></div>
          <div className="show-corner tr"></div>
          <div className="show-corner bl"></div>
          <div className="show-corner br"></div>
        </div>

        <div className="show-text">
          <div className="show-eyebrow">Case Study · {String(i + 1).padStart(2, "0")} / 04</div>
          <h3 className="show-name">
            {c.name}<br/>
            <em>{c.ser}.</em>
          </h3>
          <p className="show-desc">{c.desc}</p>
          <div className="show-specs">
            <div><span>Scope</span><strong>{c.scope}</strong></div>
            <div><span>Year</span><strong>{c.year}</strong></div>
            <div><span>Capacity</span><strong>{c.capacity}</strong></div>
            <div><span>Duration</span><strong>{c.duration}</strong></div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── RESTO ──────────────────────────────────────────────────────────────
function Resto() {
  return (
    <section id="resto" className="resto-sec">
      {/* Banner with full-bleed image */}
      <div className="resto-banner">
        <img src={A.img.resto} alt=""/>
        <div className="resto-banner-tint"></div>

        <div className="resto-banner-meta tl">
          <span>Showroom · Open Sun–Thu</span>
        </div>
        <div className="resto-banner-meta tr">
          <span>1,000+ SKUs in stock</span>
        </div>

        <div className="resto-banner-content">
          <div className="chap-num light">
            <span>Chapter</span>
            <span className="rom">III</span>
          </div>
          <h2 className="chap-title light">
            One stop. <em>Six</em><br/>
            <span className="thin">obsessions.</span>
          </h2>
          <p className="resto-lede">
            Every cookware, bakeware and tabletop discipline a working kitchen
            needs — curated, stocked, price-matched at our Shuwaikh showroom.
          </p>
        </div>

        <div className="resto-banner-shade"></div>
      </div>

      <div className="wrap">
        <div className="prod-grid">
          {RESTO_CATS.map((c, i) => <RestoCard key={c.id} c={c} i={i}/>)}
        </div>
      </div>
    </section>
  );
}

function RestoCard({ c, i }) {
  const vRef = useRef(null);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (!vRef.current) return;
    if (hover) vRef.current.play().catch(() => {}); else vRef.current.pause();
  }, [hover]);
  const featSet = [
    ["VG-10 steel", "Riveted pakka", "Lifetime sharpen"],
    ["Tri-ply 5mm", "Induction-ready", "Forged handles"],
    ["Chrome / epoxy", "Modular bays", "Mobile + static"],
    ["Aluminized", "GN-spec", "Non-stick"],
    ["Vitrified", "Edge-chip rated", "Stackable"],
    ["18/10 mirror", "Weighted", "Hospitality"],
  ];
  return (
    <article
      className="prod-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="prod-img">
        {c.video ? (
          <video ref={vRef} src={c.video} poster={c.poster} muted loop playsInline preload="metadata"/>
        ) : (
          <img src={c.poster} alt={c.name} loading="lazy"/>
        )}
        <div className="prod-shade"></div>
      </div>
      <div className="prod-body">
        <div className="prod-num">{c.id} / 06</div>
        <h3 className="prod-name">{c.name}</h3>
        <p className="prod-sub">{c.sub}</p>
        <div className="prod-feat">
          {featSet[i].map((f) => <span key={f}>{f}</span>)}
        </div>
        <div className="prod-arr"><Ico.arrow /></div>
      </div>
    </article>
  );
}

// ─── DELIVERY ───────────────────────────────────────────────────────────
function Delivery() {
  const stats = [
    { num: "86", em: "+",  lbl: "Projects · Kuwait",   desc: "Hotels, restaurants, schools, caterers, banquet halls." },
    { num: "68", em: "+",  lbl: "Brand partners",      desc: "European, American & Asian manufacturers." },
    { num: "20", em: "yr", lbl: "After-sales horizon", desc: "Genuine parts and field service per installation." },
    { num: "1k", em: "+",  lbl: "Cookware SKUs",       desc: "In-stock at our Shuwaikh showroom." },
  ];
  return (
    <section className="delivery">
      <div className="wrap">
        <div className="chap-head">
          <div className="chap-num">
            <span>Chapter</span>
            <span className="rom">IV</span>
          </div>
          <h2 className="chap-title">
            The numbers<br/>
            <em>behind</em> <span className="thin">the work.</span>
          </h2>
        </div>

        <div className="delivery-grid">
          {stats.map((s, i) => (
            <div key={i} className="del-stat">
              <div className="ds-ix">N°{String(i + 1).padStart(2, "0")}</div>
              <div className="ds-num">{s.num}<em>{s.em}</em></div>
              <div className="ds-lbl">{s.lbl}</div>
              <div className="ds-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PARTNERS ───────────────────────────────────────────────────────────
function Partners() {
  const a = [...PARTNERS_A, ...PARTNERS_A];
  const b = [...PARTNERS_B, ...PARTNERS_B];
  return (
    <section id="partners" className="partners">
      <div className="partners-bg">
        <img src={A.img.partners} alt=""/>
      </div>
      <div className="wrap">
        <div className="chap-head">
          <div className="chap-num">
            <span>Chapter</span>
            <span className="rom">V</span>
          </div>
          <h2 className="chap-title">
            Sixty-eight <em>brands.</em><br/>
            <span className="thin">One roof.</span>
          </h2>
          <p className="chap-lede">
            Direct relationships with European, American and Asian
            manufacturers — bonded warehousing, authentic spareparts, real
            warranties.
          </p>
        </div>
      </div>
      <div className="marquee">
        {a.map((p, i) => (
          <div key={"a" + i} className="partner-card">
            <span className="pn">{p.name}</span>
            <span className="pc">{p.country}</span>
          </div>
        ))}
      </div>
      <div className="marquee reverse">
        {b.map((p, i) => (
          <div key={"b" + i} className="partner-card">
            <span className="pn">{p.name}</span>
            <span className="pc">{p.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────────────
function Contact() {
  const enquiries = [
    { icon: <Ico.mail />,  lbl: "Sales · Project Enquiries",   val: "sales@automatkitchensco.com",    href: "mailto:sales@automatkitchensco.com" },
    { icon: <Ico.phone />, lbl: "Sales · Direct line",         val: "+965 60766633",                  href: "tel:+96560766633" },
    { icon: <Ico.mail />,  lbl: "Opportunities · Vendors",     val: "official@automatkitchensco.com", href: "mailto:official@automatkitchensco.com" },
    { icon: <Ico.phone />, lbl: "Opportunities · Direct line", val: "+965 69934607",                  href: "tel:+96569934607" },
    { icon: <Ico.pin />,   lbl: "Showroom · Factory",          val: "Shuwaikh Industrial · Block 2",  href: "#" },
    { icon: <Ico.clock />, lbl: "Hours",                       val: "Sun–Thu · 08:00 — 17:00",        href: "#" },
  ];
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="chap-head">
          <div className="chap-num">
            <span>Chapter</span>
            <span className="rom">VI</span>
          </div>
        </div>

        <div className="contact-headline">
          <h2>
            <span>Let's design</span>
            <span className="ser"><em>your next</em></span>
            <span>kitchen<i>.</i></span>
          </h2>
          <p>
            From the first floor-plan sketch to the last bearing replacement —
            one accountable name, across two decades, on every line of the
            schedule.
          </p>
        </div>

        <div className="contact-cards">
          {enquiries.map((e, i) => (
            <a key={i} className="cc-card" href={e.href}>
              <span className="cc-ix">N°{String(i + 1).padStart(2, "0")}</span>
              <div className="cc-ico">{e.icon}</div>
              <div className="cc-text">
                <div className="cc-lbl">{e.lbl}</div>
                <div className="cc-val">{e.val}</div>
              </div>
              <div className="cc-arr"><Ico.arrow /></div>
            </a>
          ))}
        </div>

        <footer>
          <div className="fcol">
            <div className="ft-lbl">Studio</div>
            <div className="ft-val">Automat Kitchens W.L.L.</div>
            <div className="ft-val sub">Shuwaikh Industrial · Block 2 · Kuwait</div>
          </div>
          <div className="fcol mid">
            <div className="ft-lbl">Disciplines</div>
            <div className="ft-val">Commercial · Resto · Spareparts · Service</div>
          </div>
          <div className="fcol right">
            <div className="ft-lbl">Colophon</div>
            <div className="ft-val">© 2003 — 2026</div>
            <div className="ft-val sub">Set in Fraunces, Bebas, Inter Tight</div>
          </div>
        </footer>
      </div>
    </section>
  );
}

// ─── WhatsApp float ─────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a className="wa" href="https://api.whatsapp.com/send?phone=96560766633&text=Hello%20there" target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.5 14.4l-2-1c-.3-.1-.6 0-.8.2l-.7.9c-1-.5-2.4-1.8-3-2.7l.9-.8c.2-.2.3-.5.2-.8L11 8.5c-.2-.4-.6-.6-1-.5l-1.7.5c-.4.1-.6.5-.6.9 0 5 4.4 9.4 9.4 9.4.4 0 .7-.2.9-.6l.5-1.7c.1-.4-.1-.8-.5-1z M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.4-1.4c1.4.7 2.9 1.1 4.6 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
      </svg>
    </a>
  );
}

window.Nav = Nav;
window.Hero = Hero;
window.Manifesto = Manifesto;
window.Expertise = Expertise;
window.Showcase = Showcase;
window.Resto = Resto;
window.Delivery = Delivery;
window.Partners = Partners;
window.Contact = Contact;
window.WhatsAppFloat = WhatsAppFloat;
