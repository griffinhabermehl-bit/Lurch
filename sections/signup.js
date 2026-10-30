// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup .signup-card { max-width: 920px; margin: 0 auto; text-align: center; }
    #signup .signup-kicker { margin: 0 0 24px; }
    #signup h2 { max-width: 620px; margin: 0 auto 16px; }
    #signup .signup-copy { max-width: 530px; margin: 0 auto 32px; color: var(--muted); }
    #signup .signup-form {
      display: flex;
      gap: 16px;
      max-width: 560px;
      margin: 0 auto;
    }
    #signup .signup-form input {
      min-width: 0;
      width: 100%;
      flex: 1;
      padding: 14px 16px;
      border: 1px solid var(--border);
      border-radius: var(--radius-control);
      background: var(--background);
      color: var(--text);
      font: inherit;
    }
    #signup .signup-form input::placeholder { color: var(--muted); opacity: 1; }
    #signup .signup-note { margin: 24px 0 0; color: var(--muted); font-size: .85rem; }
    #signup .signup-spark { display: inline-block; margin: 0 5px; color: var(--text); }
    @media (max-width: 680px) {
      #signup .signup-form { flex-direction: column; }
      #signup .signup-form button { width: 100%; }
    }
  </style>

  <div class="signup-card theme-card">
    <p class="signup-kicker theme-badge">Coming soon</p>
    <h2>Make every grocery run count.</h2>
    <p class="signup-copy">${SITE.name} helps you see ${SITE.tagline.toLowerCase()} before it turns into food waste. Join the early list and be first to try it.</p>
    <form class="signup-form">
      <input type="email" aria-label="Email address" placeholder="you@example.com" required>
      <button class="theme-button" type="submit">Get early access</button>
    </form>
    <p class="signup-note">No spam. Just a heads-up when it’s your turn <span class="signup-spark">✦</span></p>
  </div>
`);
