// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features {
      padding: 24px 0;
    }
    #features h2 {
      margin: 0 0 8px;
      text-align: center;
      font-size: clamp(1.8rem, 5vw, 2.6rem);
      letter-spacing: -0.02em;
    }
    #features .features-intro {
      margin: 0 0 32px;
      text-align: center;
      color: #98a6bc;
    }
    #features .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    #features .feature-card {
      padding: 28px 24px;
      border-radius: 16px;
      background: #12203a;
      border: 1px solid ${SITE.color}33;
    }
    #features .feature-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      margin-bottom: 16px;
      border-radius: 14px;
      font-size: 1.6rem;
      background: ${SITE.color}22;
    }
    #features .feature-card h3 {
      margin: 0 0 8px;
      font-size: 1.25rem;
      color: ${SITE.color};
    }
    #features .feature-card p {
      margin: 0;
      color: #c9d4e5;
    }
  </style>
  <h2>How ${SITE.name} works</h2>
  <p class="features-intro">From a quick photo to dinner, in three steps.</p>
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">📸</div>
      <h3>Snap your fridge</h3>
      <p>Take one photo of what's inside. ${SITE.name} spots the ingredients for you, so there's nothing to type.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🍳</div>
      <h3>Get recipes instantly</h3>
      <p>See recipes you can make right now with the food you already have, matched to your actual ingredients.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🥬</div>
      <h3>Waste less food</h3>
      <p>Use up what's about to go bad and skip the extra grocery run.</p>
    </div>
  </div>
`);
