import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLink } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class.scrolled]="isScrolled"
    >
      <div class="header-inner">
        <div class="logo">
          <span class="logo-box">Aarish</span>
        </div>

        <nav class="nav-links">
          <a href="#about" (click)="scrollTo($event, 'about')">About</a>
          <a href="#skills" (click)="scrollTo($event, 'skills')">Skills</a>
          <a href="#projects" (click)="scrollTo($event, 'projects')">Projects</a>
          <a href="#certificates" (click)="scrollTo($event, 'certificates')">Education</a>
          <a href="#certificates" (click)="scrollTo($event, 'certificates')">Certificates</a>
          <a href="#contact" (click)="scrollTo($event, 'contact')">Contact</a>
        </nav>

        <div class="social-nav">
          <a
            *ngFor="let link of socialLinks"
            [href]="link.url"
            target="_blank"
            rel="noopener"
            class="social-icon-btn"
            [attr.aria-label]="link.platform"
          >
            <svg *ngIf="link.icon === 'github'" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <svg *ngIf="link.icon === 'linkedin'" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <svg *ngIf="link.icon === 'twitter'" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <svg *ngIf="link.icon === 'devto'" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
            </svg>
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button class="hamburger" (click)="toggleMenu()" [class.open]="menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Mobile nav -->
      <div class="mobile-nav" [class.open]="menuOpen">
        <a href="#about" (click)="scrollTo($event, 'about')">About</a>
        <a href="#skills" (click)="scrollTo($event, 'skills')">Skills</a>
        <a href="#projects" (click)="scrollTo($event, 'projects')">Projects</a>
        <a href="#certificates" (click)="scrollTo($event, 'certificates')">Education</a>
        <a href="#certificates" (click)="scrollTo($event, 'certificates')">Certificates</a>
        <a href="#contact" (click)="scrollTo($event, 'contact')">Contact</a>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
    header {
      background: transparent;
    }
    header.scrolled {
      background: rgba(10, 10, 20, 0.9);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(99, 179, 237, 0.1);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.2rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    .logo {
      cursor: pointer;
    }
    .logo-box {
      display: inline-block;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: #e2e8f0;
      letter-spacing: 0.04em;
      padding: 0.35rem 1rem;
      border: 1px solid rgba(99,179,237,0.25);
      border-radius: 8px;
      background: rgba(99,179,237,0.05);
      transition: color 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s;
    }
    .logo-box:hover {
      color: #fff;
      border-color: rgba(99,179,237,0.8);
      background: rgba(99,179,237,0.12);
      box-shadow: 0 0 14px rgba(99,179,237,0.45), 0 0 30px rgba(99,179,237,0.2);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    .nav-links a {
      color: #a0aec0;
      text-decoration: none;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      transition: color 0.2s;
      position: relative;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0; right: 0;
      height: 1px;
      background: #63b3ed;
      transform: scaleX(0);
      transition: transform 0.2s;
    }
    .nav-links a:hover { color: #63b3ed; }
    .nav-links a:hover::after { transform: scaleX(1); }

    .social-nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
    .social-icon-btn {
      color: #718096;
      transition: color 0.2s, transform 0.2s;
      display: flex;
      align-items: center;
    }
    .social-icon-btn:hover {
      color: #63b3ed;
      transform: translateY(-2px);
    }
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }
    .hamburger span {
      display: block;
      width: 24px;
      height: 2px;
      background: #a0aec0;
      transition: all 0.3s;
    }
    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    .mobile-nav {
      display: none;
      flex-direction: column;
      padding: 0 2rem 1rem;
      gap: 1rem;
    }
    .mobile-nav.open { display: flex; }
    .mobile-nav a {
      color: #a0aec0;
      text-decoration: none;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .nav-links, .social-nav { display: none; }
      .hamburger { display: flex; }
    }
  `],
})
export class HeaderComponent implements OnInit {
  @Input() name = '';
  @Input() socialLinks: SocialLink[] = [];

  isScrolled = false;
  menuOpen = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 40;
    });
  }

  scrollTo(e: Event, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
