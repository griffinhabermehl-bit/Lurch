// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features h2, #features .features-intro { text-align: center; }
    #features .features-intro { margin: 0 0 32px; color: var(--muted); }
    #features .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
      gap: var(--grid-gap);
    }
    #features .feature-icon {
      display: grid;
      place-items: center;
      width: 52px;
      height: 52px;
      margin-bottom: 16px;
      border-radius: var(--radius-control);
      font-size: 1.6rem;
      background: var(--brand);
    }
    #features .feature-card h3 { margin: 0 0 8px; }
    #features .feature-card p { margin: 0; color: var(--muted); }
  </style>
  <h2>How ${SITE.name} works</h2>
  <p class="features-intro">From a quick photo to dinner, in three steps.</p>
  <div class="features-grid">
    <div class="feature-card theme-card">
      <div class="feature-icon">📸</div>
      <h3>Snap your fridge</h3>
      <p>Take one photo of what's inside. ${SITE.name} spots the ingredients for you, so there's nothing to type.</p>
    </div>
    <div class="feature-card theme-card">
      <div class="feature-icon">🍳</div>
      <h3>Get recipes instantly</h3>
      <p>See recipes you can make right now with the food you already have, matched to your actual ingredients.</p>
    </div>
    <div class="feature-card theme-card">
      <div class="feature-icon">🥬</div>
      <h3>Waste less food</h3>
      <p>Use up what's about to go bad and skip the extra grocery run.</p>
    </div>
  </div>
`);
