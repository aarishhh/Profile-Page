import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="hero-section">
      <!-- Animated grid background -->
      <div class="grid-bg" aria-hidden="true">
        <div class="grid-line" *ngFor="let i of gridLines"></div>
      </div>

      <!-- Glowing orbs -->
      <div class="orb orb-1" aria-hidden="true"></div>
      <div class="orb orb-2" aria-hidden="true"></div>

      <div class="hero-container">
        <div class="hero-content">
          <div class="badge-row">
            <span class="status-badge">
              <span class="status-dot"></span>
              Available for hire
            </span>
            <span class="location-tag">📍 {{ profile?.location }}</span>
          </div>

          <h1 class="hero-name">
            <span class="greeting">Hi, I'm</span>
            <span class="name-main">{{ profile?.name }}</span>
          </h1>

          <div class="typewriter-wrap">
            <span class="title-prefix">→ </span>
            <span class="hero-title">{{ profile?.title }}</span>
          </div>

          <p class="hero-bio">{{ profile?.bio }}</p>

          <div class="cta-group">
            <a href="#projects" (click)="scrollTo($event, 'projects')" class="btn-primary">
              View My Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" (click)="scrollTo($event, 'contact')" class="btn-secondary">
              Get In Touch
            </a>
          </div>

          <div class="quick-stats">
            <div class="stat" *ngFor="let stat of stats">
              <span class="stat-num">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">

          <!-- Main profile card -->
          <div class="pro-card">

            <!-- Top gradient band -->
            <div class="pro-card-band"></div>

            <!-- Avatar initials -->
            <div class="pro-avatar-wrap">
              <div class="pro-avatar">AM</div>
              <div class="pro-avatar-ring"></div>
            </div>

            <!-- Identity -->
            <div class="pro-identity">
              <h3 class="pro-name">Aarish Asif Master</h3>
              <p class="pro-role">Aspiring Developer</p>
              <div class="pro-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Pune, Maharashtra
              </div>
            </div>

            <!-- Divider -->
            <div class="pro-divider"></div>

            <!-- Stats row -->
            <div class="pro-stats">
              <div class="pro-stat">
                <span class="pro-stat-num">2</span>
                <span class="pro-stat-lbl">Projects</span>
              </div>
              <div class="pro-stat-sep"></div>
              <div class="pro-stat">
                <span class="pro-stat-num">9+</span>
                <span class="pro-stat-lbl">Skills</span>
              </div>
              <div class="pro-stat-sep"></div>
              <div class="pro-stat">
                <span class="pro-stat-num">1</span>
                <span class="pro-stat-lbl">Cert</span>
              </div>
            </div>

            <!-- Tech stack -->
            <div class="pro-stack">
              <span class="stack-label">Tech Stack</span>
              <div class="stack-pills">
                <span class="stack-pill">HTML</span>
                <span class="stack-pill">CSS</span>
                <span class="stack-pill">JavaScript</span>
                <span class="stack-pill">C++</span>
                <span class="stack-pill">Java</span>
                <span class="stack-pill">Git</span>
              </div>
            </div>

            <!-- Status -->
            <div class="pro-status">
              <span class="status-pulse"></span>
              Available for opportunities
            </div>

          </div>

          <!-- Floating side cards -->
          <div class="side-card side-top">
            <svg viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="1.5" width="16" height="16">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div>
              <div class="side-card-title">BCA Student</div>
              <div class="side-card-sub">ADYPU · 2024–2027</div>
            </div>
          </div>

          <div class="side-card side-bottom">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style="color:#68d391">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <div>
              <div class="side-card-title">Open Source</div>
              <div class="side-card-sub">github.com/aarishhh</div>
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll hint -->
      <div class="scroll-hint">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span>scroll</span>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 8rem 2rem 4rem;
    }

    /* Grid background */
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    }
    .grid-line { display: none; }

    /* Orbs */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      animation: floatOrb 8s ease-in-out infinite;
    }
    .orb-1 {
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(99,179,237,0.15) 0%, transparent 70%);
      top: -100px; left: -100px;
      animation-delay: 0s;
    }
    .orb-2 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%);
      bottom: -80px; right: -80px;
      animation-delay: -4s;
    }
    @keyframes floatOrb {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(30px, -30px); }
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .badge-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(72, 187, 120, 0.1);
      border: 1px solid rgba(72, 187, 120, 0.3);
      color: #68d391;
      padding: 0.35rem 0.9rem;
      border-radius: 999px;
      font-size: 0.78rem;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.03em;
    }
    .status-dot {
      width: 7px; height: 7px;
      background: #68d391;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(104,211,145,0.5); }
      50% { box-shadow: 0 0 0 6px rgba(104,211,145,0); }
    }
    .location-tag {
      color: #718096;
      font-size: 0.82rem;
      font-family: 'JetBrains Mono', monospace;
    }

    .hero-name {
      margin: 0 0 0.75rem;
      line-height: 1.05;
    }
    .greeting {
      display: block;
      font-size: 1.1rem;
      color: #63b3ed;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 400;
      margin-bottom: 0.3rem;
      letter-spacing: 0.05em;
    }
    .name-main {
      display: block;
      font-size: clamp(2.8rem, 5vw, 4.5rem);
      font-weight: 800;
      color: #f7fafc;
      letter-spacing: -0.03em;
      font-family: 'Space Grotesk', sans-serif;
      background: linear-gradient(135deg, #f7fafc 0%, #a0aec0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .typewriter-wrap {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.05rem;
      color: #a0aec0;
      margin-bottom: 1.5rem;
    }
    .title-prefix { color: #63b3ed; }

    .hero-bio {
      color: #718096;
      line-height: 1.8;
      font-size: 1rem;
      max-width: 520px;
      margin-bottom: 2.5rem;
    }

    .cta-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #3182ce, #63b3ed);
      color: #fff;
      padding: 0.8rem 1.8rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s;
      box-shadow: 0 4px 20px rgba(99,179,237,0.3);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(99,179,237,0.4);
    }
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      color: #a0aec0;
      padding: 0.8rem 1.8rem;
      border-radius: 8px;
      border: 1px solid rgba(160,174,192,0.2);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    .btn-secondary:hover {
      border-color: rgba(99,179,237,0.4);
      color: #63b3ed;
      background: rgba(99,179,237,0.05);
    }

    .quick-stats {
      display: flex;
      gap: 2.5rem;
    }
    .stat {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .stat-num {
      font-size: 1.8rem;
      font-weight: 800;
      color: #f7fafc;
      font-family: 'JetBrains Mono', monospace;
      line-height: 1;
    }
    .stat-label {
      font-size: 0.75rem;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* ── Professional Profile Card ── */
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 480px;
    }

    .pro-card {
      width: 300px;
      background: rgba(13, 17, 28, 0.95);
      border: 1px solid rgba(99,179,237,0.15);
      border-radius: 20px;
      overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(99,179,237,0.05),
        0 25px 70px rgba(0,0,0,0.6),
        0 0 100px rgba(99,179,237,0.06);
      animation: cardFloat 6s ease-in-out infinite;
      position: relative;
      z-index: 2;
    }
    @keyframes cardFloat {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-12px); }
    }

    /* Top gradient band */
    .pro-card-band {
      height: 5px;
      background: linear-gradient(90deg, #3182ce, #63b3ed, #9f7aea, #63b3ed, #3182ce);
      background-size: 200% 100%;
      animation: bandShift 4s linear infinite;
    }
    @keyframes bandShift {
      0%   { background-position: 0% 0%; }
      100% { background-position: 200% 0%; }
    }

    /* Avatar */
    .pro-avatar-wrap {
      position: relative;
      width: 80px;
      height: 80px;
      margin: 1.75rem auto 0;
    }
    .pro-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2b6cb0, #553c9a);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.02em;
      position: relative;
      z-index: 1;
    }
    .pro-avatar-ring {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      background: conic-gradient(#63b3ed, #9f7aea, #63b3ed, transparent, transparent);
      animation: ringRotate 3s linear infinite;
      z-index: 0;
    }
    @keyframes ringRotate {
      to { transform: rotate(360deg); }
    }

    /* Identity */
    .pro-identity {
      text-align: center;
      padding: 1rem 1.5rem 0;
    }
    .pro-name {
      font-size: 1.05rem;
      font-weight: 700;
      color: #f7fafc;
      letter-spacing: -0.01em;
      margin-bottom: 0.25rem;
    }
    .pro-role {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: #63b3ed;
      margin-bottom: 0.5rem;
      letter-spacing: 0.03em;
    }
    .pro-location {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.75rem;
      color: #4a5568;
      font-family: 'JetBrains Mono', monospace;
    }

    .pro-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(99,179,237,0.12), transparent);
      margin: 1.25rem 1.5rem;
    }

    /* Stats */
    .pro-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      padding: 0 1.5rem;
      margin-bottom: 1.25rem;
    }
    .pro-stat {
      flex: 1;
      text-align: center;
    }
    .pro-stat-sep {
      width: 1px;
      height: 28px;
      background: rgba(99,179,237,0.1);
    }
    .pro-stat-num {
      display: block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.3rem;
      font-weight: 700;
      color: #f7fafc;
      line-height: 1;
      margin-bottom: 3px;
    }
    .pro-stat-lbl {
      font-size: 0.68rem;
      color: #4a5568;
      text-transform: uppercase;
      letter-spacing: 0.07em;
    }

    /* Tech stack */
    .pro-stack {
      padding: 0 1.25rem 1.25rem;
    }
    .stack-label {
      display: block;
      font-size: 0.68rem;
      color: #4a5568;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-family: 'JetBrains Mono', monospace;
      margin-bottom: 0.6rem;
    }
    .stack-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .stack-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: #a0aec0;
      background: rgba(45,55,72,0.5);
      border: 1px solid rgba(74,85,104,0.3);
      padding: 0.2rem 0.6rem;
      border-radius: 5px;
      transition: border-color 0.2s, color 0.2s;
    }
    .stack-pill:hover {
      color: #63b3ed;
      border-color: rgba(99,179,237,0.4);
    }

    /* Status bar */
    .pro-status {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0.75rem 1.25rem;
      background: rgba(104,211,145,0.06);
      border-top: 1px solid rgba(104,211,145,0.12);
      font-size: 0.72rem;
      color: #68d391;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.03em;
    }
    .status-pulse {
      width: 7px; height: 7px;
      background: #68d391;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
      flex-shrink: 0;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(104,211,145,0.5); }
      50%       { box-shadow: 0 0 0 5px rgba(104,211,145,0); }
    }

    /* Side floating cards */
    .side-card {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(13,17,28,0.92);
      border: 1px solid rgba(99,179,237,0.15);
      border-radius: 12px;
      padding: 0.7rem 1rem;
      backdrop-filter: blur(16px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      min-width: 180px;
      z-index: 3;
    }
    .side-top {
      top: 6%;
      right: -10px;
      animation: floatA 5s ease-in-out infinite;
    }
    .side-bottom {
      bottom: 10%;
      left: -10px;
      animation: floatB 5s ease-in-out infinite;
    }
    @keyframes floatA {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-8px); }
    }
    @keyframes floatB {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(8px); }
    }
    .side-card-title {
      font-size: 0.78rem;
      font-weight: 600;
      color: #e2e8f0;
      margin-bottom: 2px;
    }
    .side-card-sub {
      font-size: 0.68rem;
      color: #4a5568;
      font-family: 'JetBrains Mono', monospace;
    }

    .scroll-hint {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: #4a5568;
      font-size: 0.7rem;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .scroll-mouse {
      width: 22px; height: 34px;
      border: 2px solid rgba(74,85,104,0.5);
      border-radius: 11px;
      display: flex;
      justify-content: center;
      padding-top: 5px;
    }
    .scroll-wheel {
      width: 3px; height: 6px;
      background: #4a5568;
      border-radius: 2px;
      animation: scrollWheel 2s ease-in-out infinite;
    }
    @keyframes scrollWheel {
      0%, 100% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(8px); opacity: 0; }
    }

    @media (max-width: 900px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .hero-visual { display: none; }
      .badge-row { justify-content: center; }
      .cta-group { justify-content: center; }
      .quick-stats { justify-content: center; }
      .hero-bio { margin: 0 auto 2.5rem; }
    }
  `],
})
export class HeroComponent implements OnInit {
  @Input() profile: Profile | null = null;

  gridLines = Array(20).fill(0);
  stats = [
    { value: '', label: '' },
  ];

  ngOnInit() {}

  scrollTo(e: Event, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
