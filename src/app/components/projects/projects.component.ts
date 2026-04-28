import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="section-container">
        <div class="section-header">
          <span class="section-label">// 03. portfolio</span>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-sub">Things I've built and shipped</p>
        </div>

        <div class="projects-grid">
          <article
            *ngFor="let project of projects; let i = index"
            class="project-card"
            [class.featured]="project.featured"
          >
            <!-- Gradient top bar -->
            <div class="card-gradient-bar bg-gradient-to-r {{ project.gradient }}"></div>

            <div class="card-body">
              <div class="card-top">
                <div class="card-icon-wrap">
                  <div class="card-icon bg-gradient-to-br {{ project.gradient }}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22">
                      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>
                <div class="card-links">
                  <a [href]="project.githubUrl" target="_blank" rel="noopener" class="card-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank" rel="noopener" class="card-link" aria-label="Live demo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="featured-badge" *ngIf="project.featured">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Featured
              </div>

              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-desc">{{ project.description }}</p>

              <div class="card-tech">
                <span class="tech-pill" *ngFor="let t of project.tech">{{ t }}</span>
              </div>
            </div>

            <!-- Hover overlay -->
            <div class="card-hover-overlay"></div>
          </article>
        </div>

        <div class="more-link">
          <a href="https://github.com/aarishhh" target="_blank" class="btn-ghost">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 6rem 2rem;
      background: rgba(10,10,20,0.3);
    }
    .section-container {
      max-width: 1100px;
      margin: 0 auto;
    }
    .section-header { margin-bottom: 3rem; }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      color: #63b3ed;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #f7fafc;
      margin: 0.5rem 0 0.75rem;
      letter-spacing: -0.03em;
    }
    .section-sub { color: #718096; }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .project-card {
      position: relative;
      background: rgba(16, 20, 35, 0.8);
      border: 1px solid rgba(99,179,237,0.08);
      border-radius: 16px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
      cursor: pointer;
    }
    .project-card:hover {
      transform: translateY(-6px) scale(1.01);
      border-color: rgba(99,179,237,0.25);
      box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,179,237,0.1);
    }
    .project-card.featured {
      border-color: rgba(99,179,237,0.15);
    }

    .card-gradient-bar {
      height: 3px;
      width: 100%;
    }
    /* Tailwind-like gradient utility (inline) */
    .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-from, #06b6d4), var(--tw-gradient-to, #3b82f6)); }

    .card-body { padding: 1.5rem; }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    .card-icon-wrap { position: relative; }
    .card-icon {
      width: 44px; height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      opacity: 0.9;
    }

    .card-links {
      display: flex;
      gap: 0.5rem;
    }
    .card-link {
      color: #4a5568;
      transition: color 0.2s, transform 0.2s;
      display: flex;
    }
    .card-link:hover { color: #63b3ed; transform: translateY(-2px); }

    .featured-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: rgba(99,179,237,0.1);
      border: 1px solid rgba(99,179,237,0.2);
      color: #63b3ed;
      font-size: 0.7rem;
      font-family: 'JetBrains Mono', monospace;
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      margin-bottom: 0.75rem;
    }

    .card-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #f7fafc;
      margin: 0 0 0.75rem;
      letter-spacing: -0.01em;
    }
    .card-desc {
      color: #718096;
      font-size: 0.88rem;
      line-height: 1.7;
      margin-bottom: 1.25rem;
    }

    .card-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .tech-pill {
      background: rgba(74,85,104,0.2);
      border: 1px solid rgba(74,85,104,0.25);
      color: #a0aec0;
      padding: 0.2rem 0.65rem;
      border-radius: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
    }

    .card-hover-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,179,237,0.04), transparent 40%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .project-card:hover .card-hover-overlay { opacity: 1; }

    .more-link {
      display: flex;
      justify-content: center;
    }
    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #718096;
      border: 1px solid rgba(74,85,104,0.3);
      padding: 0.75rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    .btn-ghost:hover {
      color: #a0aec0;
      border-color: rgba(99,179,237,0.3);
      background: rgba(99,179,237,0.05);
    }
  `],
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
