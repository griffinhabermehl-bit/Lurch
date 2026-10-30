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
      padding: 64px 24px;
      border-radius: 20px;
      background:
        radial-gradient(ellipse at 50% 0%, ${SITE.color}33 0%, transparent 65%),
        #0f1a2e;
      border: 1px solid ${SITE.color}44;
    }
    #hero .hero-inner {
      max-width: 640px;
    }
    #hero .hero-badge {
      display: inline-block;
      padding: 4px 14px;
      margin-bottom: 20px;
      border-radius: 999px;
      font-size: .8rem;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: ${SITE.color};
      border: 1px solid ${SITE.color}66;
    }
    #hero h1 {
      margin: 0 0 12px;
      font-size: clamp(3rem, 10vw, 5.5rem);
      line-height: 1;
      letter-spacing: -0.03em;
      color: ${SITE.color};
    }
    #hero p {
      margin: 0 0 32px;
      font-size: clamp(1.1rem, 3vw, 1.6rem);
      color: #c9d4e5;
    }
    #hero .hero-sub {
      max-width: 520px;
      margin: -12px auto 32px;
      font-size: 1.05rem;
      color: #98a6bc;
    }
    #hero .hero-btn {
      display: inline-block;
      padding: 16px 36px;
      border-radius: 999px;
      font-size: 1.1rem;
      font-weight: 700;
      text-decoration: none;
      color: #0b1220;
      background: ${SITE.color};
      box-shadow: 0 8px 28px ${SITE.color}55;
      transition: transform .15s ease, box-shadow .15s ease;
    }
    #hero .hero-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 34px ${SITE.color}77;
    }
    #hero .hero-btn:focus-visible {
      outline: 3px solid #fff;
      outline-offset: 3px;
    }
  </style>
  <div class="hero-inner">
    <span class="hero-badge">Snap. Cook. Repeat.</span>
    <h1>${SITE.name}</h1>
    <p>${SITE.tagline}</p>
    <p class="hero-sub">Take a photo of your fridge and get recipes you can make right now with the food you already have.</p>
    <a class="hero-btn" href="#signup">Get early access</a>
  </div>
`);
