// Shared site details and visual theme. All sections use these tokens.
window.SITE = {
  name: "Lurch",
  tagline: "Whats in the fridge",
  color: "#506778"
};

const theme = document.createElement("style");
theme.textContent = `
  :root {
    --brand: ${SITE.color};
    --background: #0B1220;
    --card: #192C3B;
    --text: #F1F5F9;
    --muted: #F1F5F9CC;
    --border: ${SITE.color};
    --radius-section: 20px;
    --radius-card: 16px;
    --radius-control: 12px;
    --section-space: clamp(32px, 6vw, 64px);
    --card-space: 24px;
    --grid-gap: 24px;
  }
  body {
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
  }
  main { gap: 24px; }
  main > section {
    padding: var(--section-space) clamp(20px, 4vw, 32px);
    border: 1px solid var(--border);
    border-radius: var(--radius-section);
    background: var(--background);
    overflow-wrap: anywhere;
  }
  main h1, main h2, main h3 { color: var(--text); }
  main h2 {
    margin: 0 0 16px;
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    line-height: 1.2;
    letter-spacing: -0.03em;
  }
  main h3 { font-size: 1.25rem; line-height: 1.3; }
  main .theme-card {
    padding: var(--card-space);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    background: var(--card);
  }
  main .theme-badge {
    display: inline-block;
    padding: 6px 14px;
    border: 1px solid var(--border);
    border-radius: var(--radius-control);
    background: var(--card);
    color: var(--text);
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  main .theme-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 14px 24px;
    border: 1px solid var(--brand);
    border-radius: var(--radius-control);
    background: var(--brand);
    color: var(--text);
    font: inherit;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: background .15s ease, border-color .15s ease;
  }
  main .theme-button:hover {
    background: var(--card);
    border-color: var(--text);
  }
  main .theme-button:focus-visible, main input:focus-visible {
    outline: 2px solid var(--text);
    outline-offset: 4px;
  }
  footer { color: var(--muted); }
  @media (max-width: 560px) {
    main .theme-button { width: 100%; }
  }
  @media (prefers-reduced-motion: reduce) {
    main .theme-button { transition: none; }
  }
`;
document.head.appendChild(theme);
