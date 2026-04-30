/* global React, ReactDOM */
/* global Nav, Hero, Manifesto, Expertise, Showcase, Resto, Delivery, Partners, Contact, WhatsAppFloat */
/* global TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio, TweakToggle */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C9A84C",
  "atmosphere": "charcoal",
  "grain": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const map = {
      charcoal: "radial-gradient(1200px 800px at 80% -10%, rgba(35,40,55,0.6) 0%, transparent 70%), radial-gradient(900px 700px at -10% 60%, rgba(20,22,30,0.8) 0%, transparent 60%), #0B0C0E",
      midnight: "radial-gradient(1200px 800px at 50% -10%, #0a1a3a 0%, #04081f 50%, #000 100%)",
      ember:    "radial-gradient(1200px 800px at 50% -10%, #2a1230 0%, #15081e 50%, #060209 100%)",
      bone:     "radial-gradient(1400px 900px at 50% -10%, #f5f2ec 0%, #d8dde3 60%, #9aa1ab 100%)",
    };
    document.body.style.background = map[tweaks.atmosphere] || map.charcoal;
    document.documentElement.style.setProperty("--gold", tweaks.accent);
  }, [tweaks.atmosphere, tweaks.accent]);

  return (
    <>
      {tweaks.grain && <div className="grain"></div>}
      <Nav/>
      <Hero/>
      <Manifesto/>
      <Expertise/>
      <Showcase/>
      <Resto/>
      <Delivery/>
      <Partners/>
      <Contact/>
      <WhatsAppFloat/>
      <TweaksPanel title="Tweaks">
        <TweakSection title="Atmosphere">
          <TweakRadio
            label="Background"
            value={tweaks.atmosphere}
            onChange={(v) => setTweak("atmosphere", v)}
            options={[
              { value: "charcoal", label: "Charcoal" },
              { value: "midnight", label: "Midnight" },
              { value: "ember", label: "Ember" },
              { value: "bone", label: "Bone" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Accent">
          <TweakColor label="Accent" value={tweaks.accent} onChange={(v) => setTweak("accent", v)}/>
        </TweakSection>
        <TweakSection title="Grain">
          <TweakToggle label="Film grain" value={tweaks.grain} onChange={(v) => setTweak("grain", v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
