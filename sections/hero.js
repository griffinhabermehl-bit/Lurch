// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero {
      min-height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    #hero .hero-inner { max-width: 640px; min-width: 0; }
    #hero .hero-badge { margin-bottom: 24px; }
    #hero h1 {
      margin: 0 0 16px;
      font-size: clamp(3rem, 10vw, 5.5rem);
      line-height: 1.1;
      letter-spacing: -0.03em;
    }
    #hero p {
      margin: 0 0 24px;
      font-size: clamp(1.1rem, 3vw, 1.6rem);
      color: var(--muted);
    }
    #hero .hero-sub {
      max-width: 520px;
      margin: 0 auto 32px;
      font-size: 1rem;
    }
  </style>
  <div class="hero-inner">
    <span class="hero-badge theme-badge">Snap. Cook. Repeat.</span>
    <h1>${SITE.name}</h1>
    <p>${SITE.tagline}</p>
    <p class="hero-sub">Take a photo of your fridge and get recipes you can make right now with the food you already have.</p>
    <a class="hero-btn theme-button" href="#signup">Get early access</a>
  </div>
`);
