// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.
section("team", () => `
  <style>
    #team {
      background: #FAF7F2;
      color: #28343D;
      border-radius: 28px;
      padding: clamp(28px, 6vw, 64px);
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    #team .team-intro { max-width: 600px; }
    #team .team-eyebrow {
      display: inline-block;
      background: #DCE5EB;
      border-radius: 999px;
      padding: 6px 14px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    #team h2 {
      font-size: clamp(2rem, 5vw, 3rem);
      line-height: 1.15;
      letter-spacing: -0.04em;
      margin: 20px 0 16px;
      overflow-wrap: anywhere;
    }
    #team .team-description { color: #506778; line-height: 1.75; margin: 0; }
    #team .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
      gap: 20px;
      margin: 32px 0;
    }
    #team .team-card {
      background: #FFFFFF;
      border: 1px solid #DCE5EB;
      border-radius: 20px;
      padding: 26px;
    }
    #team .team-avatar {
      display: grid;
      place-items: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #DCE5EB;
      color: #506778;
      font-size: 1.2rem;
      font-weight: 700;
    }
    #team h3 { font-size: 1.15rem; margin: 20px 0 6px; }
    #team .team-bio { font-size: 0.95rem; line-height: 1.7; margin: 16px 0 0; padding-left: 20px; }
    #team .team-bio li { margin-bottom: 8px; }
    #team .team-bio li::marker { color: #506778; }
    #team .team-mission {
      border-top: 1px solid #DCE5EB;
      padding-top: 24px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
    }
    #team .team-brand-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${SITE.color};
      flex: 0 0 auto;
    }
    #team .team-mission p { margin: 0; font-size: 0.9rem; }
  </style>

  <div class="team-intro">
    <span class="team-eyebrow">The people behind the plate</span>
    <h2>Meet the team behind ${SITE.name}.</h2>
    <p class="team-description">
      A fridge full of ingredients. A little inspiration. We're building
      ${SITE.name} to turn a quick photo into ideas for your next meal.
    </p>
  </div>

  <div class="team-grid">
    <article class="team-card">
      <div class="team-avatar" aria-hidden="true">M</div>
      <h3>Malina</h3>
      <ul class="team-bio">
        <li>Pretty awesome</li>
        <li>6 foot 5</li>
        <li>Master roaster</li>
        <li>Favorite food: sweet potato</li>
      </ul>
    </article>
    <article class="team-card">
      <div class="team-avatar" aria-hidden="true">G</div>
      <h3>Griffin</h3>
      <ul class="team-bio">
        <li>Self-appointed team leader</li>
        <li>Shorter than Malina</li>
        <li>Favorite food: pasta</li>
      </ul>
    </article>
    <article class="team-card">
      <div class="team-avatar" aria-hidden="true">I</div>
      <h3>Imani</h3>
      <ul class="team-bio">
        <li>Cool enough</li>
        <li>${SITE.name}'s favorite</li>
        <li>Favorite food: grapes</li>
      </ul>
    </article>
  </div>

  <div class="team-mission">
    <span class="team-brand-dot" aria-hidden="true"></span>
    <p><strong>${SITE.name}</strong> &middot; ${SITE.tagline}</p>
  </div>
`);
