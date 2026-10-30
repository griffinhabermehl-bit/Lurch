// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.
section("team", () => `
  <style>
    #team .team-intro { max-width: 600px; }
    #team .team-eyebrow { margin-bottom: 24px; }
    #team .team-description { color: var(--muted); margin: 0; }
    #team .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
      gap: var(--grid-gap);
      margin: 32px 0;
    }
    #team .team-avatar {
      display: grid;
      place-items: center;
      width: 60px;
      height: 60px;
      border-radius: var(--radius-control);
      background: var(--brand);
      color: var(--text);
      font-size: 1.2rem;
      font-weight: 700;
    }
    #team h3 { margin: 16px 0 8px; }
    #team .team-bio { color: var(--muted); margin: 16px 0 0; padding-left: 20px; }
    #team .team-bio li { margin-bottom: 8px; }
    #team .team-mission {
      border-top: 1px solid var(--border);
      padding-top: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    #team .team-brand-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--brand);
      flex: 0 0 auto;
    }
    #team .team-mission p { margin: 0; font-size: .9rem; color: var(--muted); }
  </style>

  <div class="team-intro">
    <span class="team-eyebrow theme-badge">The people behind the plate</span>
    <h2>Meet the team behind ${SITE.name}.</h2>
    <p class="team-description">
      A fridge full of ingredients. A little inspiration. We're building
      ${SITE.name} to turn a quick photo into ideas for your next meal.
    </p>
  </div>

  <div class="team-grid">
    <article class="team-card theme-card">
      <div class="team-avatar" aria-hidden="true">M</div>
      <h3>Malina</h3>
      <ul class="team-bio">
        <li>Pretty awesome</li>
        <li>6 foot 5</li>
        <li>Master roaster</li>
        <li>Favorite food: sweet potato</li>
      </ul>
    </article>
    <article class="team-card theme-card">
      <div class="team-avatar" aria-hidden="true">G</div>
      <h3>Griffin</h3>
      <ul class="team-bio">
        <li>Self-appointed team leader</li>
        <li>Shorter than Malina</li>
        <li>Favorite food: pasta</li>
      </ul>
    </article>
    <article class="team-card theme-card">
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
