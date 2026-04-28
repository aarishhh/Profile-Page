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
          <div class="avatar-ring">
            <div class="avatar-ring-inner">
              <img [src]="profile?.avatar" [alt]="profile?.name" class="avatar-img" />
            </div>
            <!-- Orbiting dots -->
            <div class="orbit orbit-1">
              <div class="orbit-dot"></div>
            </div>
            <div class="orbit orbit-2">
              <div class="orbit-dot dot-2"></div>
            </div>
          </div>

          <!-- Tech floating badges -->
          <div class="float-badge badge-tl">Angular 17</div>
          <div class="float-badge badge-tr">TypeScript</div>
          <div class="float-badge badge-bl">Node.js</div>
          <div class="float-badge badge-br">AWS</div>
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

    /* Avatar visual */
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 450px;
    }
    .avatar-ring {
      position: relative;
      width: 280px;
      height: 280px;
    }
    .avatar-ring-inner {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      padding: 4px;
      background: linear-gradient(135deg, #63b3ed, #9f7aea, #63b3ed);
      animation: rotateBorder 6s linear infinite;
    }
    @keyframes rotateBorder {
      from { filter: hue-rotate(0deg); }
      to { filter: hue-rotate(360deg); }
    }
    .avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      background: #1a202c;
    }

    /* Orbiting elements */
    .orbit {
      position: absolute;
      top: 50%; left: 50%;
      border-radius: 50%;
      border: 1px dashed rgba(99,179,237,0.2);
    }
    .orbit-1 {
      width: 340px; height: 340px;
      margin: -170px 0 0 -170px;
      animation: spin 12s linear infinite;
    }
    .orbit-2 {
      width: 410px; height: 410px;
      margin: -205px 0 0 -205px;
      animation: spin 20s linear infinite reverse;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .orbit-dot {
      position: absolute;
      top: -5px; left: 50%;
      width: 10px; height: 10px;
      margin-left: -5px;
      border-radius: 50%;
      background: #63b3ed;
      box-shadow: 0 0 10px rgba(99,179,237,0.8);
    }
    .dot-2 { background: #9f7aea; box-shadow: 0 0 10px rgba(159,122,234,0.8); }

    /* Floating badges */
    .float-badge {
      position: absolute;
      background: rgba(26,32,44,0.9);
      border: 1px solid rgba(99,179,237,0.2);
      color: #a0aec0;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      backdrop-filter: blur(10px);
      animation: floatBadge 4s ease-in-out infinite;
    }
    .badge-tl { top: 10%; left: 0; animation-delay: 0s; }
    .badge-tr { top: 15%; right: 0; animation-delay: -1s; }
    .badge-bl { bottom: 20%; left: 0; animation-delay: -2s; }
    .badge-br { bottom: 15%; right: 0; animation-delay: -3s; }
    @keyframes floatBadge {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
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
