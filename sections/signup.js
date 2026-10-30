// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup {
      --signup-accent: ${SITE.color};
      position: relative;
      overflow: hidden;
      padding: 104px 24px;
      background: #102622;
      color: #f7fffc;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    #signup::before {
      position: absolute;
      width: 440px;
      height: 440px;
      border-radius: 50%;
      top: -235px;
      right: -130px;
      background: var(--signup-accent);
      content: "";
      filter: blur(10px);
      opacity: 0.18;
    }

    #signup .signup-card {
      position: relative;
      box-sizing: border-box;
      max-width: 920px;
      margin: 0 auto;
      padding: 56px;
      border: 1px solid rgba(255, 255, 255, 0.13);
      border-radius: 28px;
      background: rgba(255, 255, 255, 0.06);
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
      text-align: center;
    }

    #signup .signup-kicker {
      margin: 0 0 16px;
      color: var(--signup-accent);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    #signup h2 {
      max-width: 620px;
      margin: 0 auto;
      font-size: clamp(2.35rem, 6vw, 4.7rem);
      letter-spacing: -0.06em;
      line-height: 0.96;
    }

    #signup .signup-copy {
      max-width: 530px;
      margin: 22px auto 32px;
      color: rgba(247, 255, 252, 0.72);
      font-size: 1.1rem;
      line-height: 1.6;
    }

    #signup .signup-form {
      display: flex;
      gap: 10px;
      max-width: 500px;
      margin: 0 auto;
    }

    #signup .signup-form input {
      min-width: 0;
      flex: 1;
      padding: 16px 18px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      outline: none;
      background: rgba(0, 0, 0, 0.17);
      color: #fff;
      font: inherit;
    }

    #signup .signup-form input:focus {
      border-color: var(--signup-accent);
      box-shadow: 0 0 0 4px rgba(95, 227, 207, 0.16);
    }

    #signup .signup-form button {
      padding: 16px 22px;
      border: 0;
      border-radius: 12px;
      background: var(--signup-accent);
      color: #102622;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      white-space: nowrap;
    }

    #signup .signup-note {
      margin: 18px 0 0;
      color: rgba(247, 255, 252, 0.52);
      font-size: 0.82rem;
    }

    #signup .signup-spark {
      display: inline-block;
      margin: 0 5px;
      color: var(--signup-accent);
    }

    @media (max-width: 560px) {
      #signup { padding: 64px 16px; }
      #signup .signup-card { padding: 40px 22px; }
      #signup .signup-form { flex-direction: column; }
      #signup .signup-form button { width: 100%; }
    }
  </style>

  <div class="signup-card">
    <p class="signup-kicker">Coming soon</p>
    <h2>Make every grocery run count.</h2>
    <p class="signup-copy">${SITE.name} helps you see ${SITE.tagline.toLowerCase()} before it turns into food waste. Join the early list and be first to try it.</p>
    <form class="signup-form">
      <input type="email" aria-label="Email address" placeholder="you@example.com" required>
      <button type="submit">Get early access</button>
    </form>
    <p class="signup-note">No spam. Just a heads-up when it’s your turn <span class="signup-spark">✦</span></p>
  </div>
`);
