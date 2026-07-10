const features = [
  {
    number: "01",
    title: "Protect useful history",
    text: "Keep blacklisted commands, keyboard smashes, and accidental punctuation from cluttering the commands you rely on.",
    icon: "shield",
  },
  {
    number: "02",
    title: "Catch the near miss",
    text: "Spot executable, subcommand, and long-option typos while suggesting the command you most likely meant.",
    icon: "spark",
  },
  {
    number: "03",
    title: "Clean what is already there",
    text: "Review existing history with backups, dry runs, duplicate removal, and an optional Alt-Ctrl-H cleanup shortcut.",
    icon: "broom",
  },
];

const settings = [
  ["hg.strict_subcommands", "Reject unrelated subcommands such as git asdfgh."],
  ["hg.max_distance", "Tune how close a typo needs to be for a suggestion."],
  ["hg.cleanup_unknown_exe", "Opt into deeper cleanup checks when needed."],
];

function Mark({ name }: { name: "shield" | "spark" | "broom" }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 19 6v5c0 4.3-2.8 8.1-7 10-4.2-1.9-7-5.7-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20h16" />
      <path d="m8 20 1-9m3 9 .5-9m3.5 9-1-9" />
      <path d="M6 8h12" />
      <path d="m9 8 1-3h4l1 3" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="noise" />
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="ClinkKit home">
            <span className="brand-mark">&gt;_</span>
            <span>clinkkit</span>
          </a>
          <div className="nav-links">
            <a href="#historyguard">HistoryGuard</a>
            <a href="#how-it-works">How it works</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <a
            className="github-link"
            href="https://github.com/max31337/ClinkKit"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </nav>

        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Built for Windows CMD + Clink</p>
            <h1>Keep the <em>mistakes</em>.<br />Lose the history.</h1>
            <p className="hero-description">
              ClinkKit is a modular productivity toolkit for Windows CMD. Its first feature,
              HistoryGuard, keeps accidental commands from polluting the history you depend on.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#install">Get started <Arrow /></a>
              <a className="button button-quiet" href="#historyguard">Explore HistoryGuard</a>
            </div>
            <div className="hero-meta">
              <span>Available now <b>HistoryGuard</b></span>
              <span>Planned next <b>Aliases + utilities</b></span>
            </div>
          </div>

          <div className="terminal-wrap" aria-label="HistoryGuard terminal example">
            <div className="terminal-glow" />
            <div className="terminal">
              <div className="terminal-bar">
                <span className="dots"><i /><i /><i /></span>
                <span>cmd.exe - Clink</span>
                <span className="terminal-status">protected</span>
              </div>
              <div className="terminal-body">
                <p><span className="prompt">~max31337 &#123;~&#125;</span></p>
                <p><span className="prompt-char">&#10095;</span> git <span className="mistake">stauts</span></p>
                <p className="guard"><span>HistoryGuard</span>: didn&apos;t save to history.</p>
                <p className="suggestion">Did you mean: <strong>git status</strong></p>
                <br />
                <p>git: &apos;stauts&apos; is not a git command.</p>
                <p className="muted">The most similar command is</p>
                <p className="status-line">status <span>history kept clean</span></p>
                <br />
                <p><span className="prompt">~max31337 &#123;~&#125;</span></p>
                <p><span className="prompt-char">&#10095;</span> <span className="cursor" /></p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom shell"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="feature-section" id="historyguard">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow dark-eyebrow"><span /> HISTORYGUARD / AVAILABLE NOW</p>
            <h2>Small safeguard.<br /><em>Better</em> recall.</h2>
            <p>HistoryGuard leaves execution alone. It simply gives your command history a better memory.</p>
          </div>

          <div className="features">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top"><span>{feature.number}</span><div className="icon"><Mark name={feature.icon as "shield" | "spark" | "broom"} /></div></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flow-section" id="how-it-works">
        <div className="shell flow-grid">
          <div className="flow-copy">
            <p className="eyebrow"><span /> QUIETLY IN THE BACKGROUND</p>
            <h2>Your command.<br />Your <em>call.</em></h2>
            <p>HistoryGuard never stops CMD from running a command. It evaluates the line after you accept it and decides whether Clink should remember it.</p>
          </div>
          <ol className="flow-list">
            <li><span>01</span><div><h3>You press Enter</h3><p>CMD receives your command exactly as typed.</p></div></li>
            <li><span>02</span><div><h3>HistoryGuard evaluates it</h3><p>It checks configured rules for accidental or unwanted history entries.</p></div></li>
            <li><span>03</span><div><h3>Clink saves the useful stuff</h3><p>Valid commands remain searchable. Rejected lines do not clutter future recall.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="install-section" id="install">
        <div className="shell install-grid">
          <div>
            <p className="eyebrow dark-eyebrow"><span /> START WITH SOURCE</p>
            <h2>Up and running<br />in <em>minutes.</em></h2>
            <p className="install-copy">ClinkKit is currently installed from source. Copy the loader and module directory into your Clink profile, then reload scripts.</p>
            <a className="text-link" href="https://github.com/max31337/ClinkKit" target="_blank" rel="noreferrer">View installation instructions <Arrow /></a>
          </div>
          <div className="install-terminal">
            <div className="code-header"><span>WINDOWS CMD</span><span>MANUAL INSTALL</span></div>
            <pre><code><span className="code-comment">:: Place both in your Clink profile</span>{"\n"}<span className="code-path">%LOCALAPPDATA%\clink\00_clinkkit.lua</span>{"\n"}<span className="code-path">%LOCALAPPDATA%\clink\clinkkit\</span>{"\n\n"}<span className="code-comment">:: Reload scripts, then verify settings</span>{"\n"}<span className="code-prompt">&gt;</span> clink set hg.max_distance</code></pre>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <div className="shell settings-grid">
          <div className="settings-intro">
            <p className="eyebrow"><span /> MAKE IT YOURS</p>
            <h2>Guardrails,<br />not <em>handcuffs.</em></h2>
            <p>Every safeguard is configurable with normal Clink settings. Keep a light touch, or turn on strict subcommand filtering when you want it.</p>
          </div>
          <div className="setting-list">
            {settings.map(([setting, text]) => (
              <div className="setting" key={setting}>
                <code>{setting}</code>
                <p>{text}</p>
              </div>
            ))}
            <a className="setting-more" href="https://github.com/max31337/ClinkKit" target="_blank" rel="noreferrer">See all settings <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="shell">
          <div className="roadmap-heading"><div><p className="eyebrow dark-eyebrow"><span /> BUILT TO GROW</p><h2>One toolkit.<br /><em>More</em> to come.</h2></div><p>HistoryGuard is the first ClinkKit module. The roadmap expands the CMD experience without pretending future features are already here.</p></div>
          <div className="roadmap-cards">
            <article className="roadmap-card available"><span className="roadmap-state">AVAILABLE NOW</span><h3>HistoryGuard</h3><ul><li>History filtering</li><li>Typo suggestions</li><li>Cleanup and backups</li></ul><span className="roadmap-symbol">01</span></article>
            <article className="roadmap-card"><span className="roadmap-state">PLANNED</span><h3>Aliases</h3><ul><li>User-defined aliases</li><li>Import and export</li><li>Alias management</li></ul><span className="roadmap-symbol">02</span></article>
            <article className="roadmap-card"><span className="roadmap-state">PLANNED</span><h3>Utilities</h3><ul><li>Safe trash command</li><li><code>mkcd</code></li><li>File and directory helpers</li></ul><span className="roadmap-symbol">03</span></article>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-content">
          <a className="brand" href="#top"><span className="brand-mark">&gt;_</span><span>clinkkit</span></a>
          <p>Tools for a more deliberate Windows CMD.</p>
          <div><a href="https://github.com/max31337/ClinkKit" target="_blank" rel="noreferrer">Source</a><a href="#top">Back to top</a></div>
        </div>
      </footer>
    </main>
  );
}
