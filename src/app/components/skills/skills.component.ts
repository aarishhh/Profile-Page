import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="section-container">
        <div class="section-header">
          <span class="section-label">// 02. expertise</span>
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-sub">Tools I use to bring ideas to life</p>
        </div>

        <!-- Category filter -->
        <div class="category-tabs">
          <button
            *ngFor="let cat of categories"
            (click)="activeCategory = cat"
            class="cat-tab"
            [class.active]="activeCategory === cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Skills grid -->
        <div class="skills-grid">
          <div
            *ngFor="let skill of filteredSkills"
            class="skill-card"
            [class.visible]="true"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar-track">
              <div
                class="skill-bar-fill"
                [style.width.%]="skill.level"
                [class]="'fill-' + skill.category.toLowerCase()"
              ></div>
            </div>
            <span class="skill-category">{{ skill.category }}</span>
          </div>
        </div>

        <!-- Tech tags cloud -->
        <div class="tech-cloud">
          <span class="cloud-label">Also familiar with:</span>
          <div class="tags">
            <span class="tag" *ngFor="let tag of extraTech">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding: 6rem 2rem;
      position: relative;
    }
    .section-container {
      max-width: 900px;
      margin: 0 auto;
    }
    .section-header {
      margin-bottom: 3rem;
    }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      color: #63b3ed;
      letter-spacing: 0.05em;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #f7fafc;
      margin: 0.5rem 0 0.75rem;
      letter-spacing: -0.03em;
    }
    .section-sub {
      color: #718096;
      font-size: 1rem;
    }

    .category-tabs {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;
    }
    .cat-tab {
      background: none;
      border: 1px solid rgba(160,174,192,0.15);
      color: #718096;
      padding: 0.4rem 1rem;
      border-radius: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .cat-tab.active, .cat-tab:hover {
      border-color: #63b3ed;
      color: #63b3ed;
      background: rgba(99,179,237,0.08);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
      margin-bottom: 3rem;
    }
    .skill-card {
      background: rgba(26,32,44,0.6);
      border: 1px solid rgba(99,179,237,0.08);
      border-radius: 12px;
      padding: 1.25rem 1.5rem;
      transition: border-color 0.2s, transform 0.2s;
    }
    .skill-card:hover {
      border-color: rgba(99,179,237,0.25);
      transform: translateY(-2px);
    }
    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }
    .skill-name {
      font-weight: 600;
      color: #e2e8f0;
      font-size: 0.95rem;
    }
    .skill-percent {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      color: #63b3ed;
      font-weight: 600;
    }
    .skill-bar-track {
      height: 5px;
      background: rgba(74,85,104,0.3);
      border-radius: 999px;
      overflow: hidden;
      margin-bottom: 0.6rem;
    }
    .skill-bar-fill {
      height: 100%;
      border-radius: 999px;
      transition: width 1s ease-out;
    }
    .fill-frontend { background: linear-gradient(90deg, #3182ce, #63b3ed); }
    .fill-backend { background: linear-gradient(90deg, #38a169, #68d391); }
    .fill-devops { background: linear-gradient(90deg, #d69e2e, #f6e05e); }
    .fill-language { background: linear-gradient(90deg, #805ad5, #b794f4); }
    .fill-design { background: linear-gradient(90deg, #dd6b20, #f6ad55); }

    .skill-category {
      font-size: 0.72rem;
      color: #4a5568;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-family: 'JetBrains Mono', monospace;
    }

    .tech-cloud {
      border-top: 1px solid rgba(99,179,237,0.1);
      padding-top: 2rem;
    }
    .cloud-label {
      font-size: 0.82rem;
      color: #4a5568;
      font-family: 'JetBrains Mono', monospace;
      display: block;
      margin-bottom: 1rem;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }
    .tag {
      background: rgba(74,85,104,0.2);
      border: 1px solid rgba(74,85,104,0.3);
      color: #718096;
      padding: 0.3rem 0.8rem;
      border-radius: 6px;
      font-size: 0.78rem;
      font-family: 'JetBrains Mono', monospace;
      transition: all 0.2s;
      cursor: default;
    }
    .tag:hover {
      color: #a0aec0;
      border-color: rgba(99,179,237,0.3);
    }
  `],
})
export class SkillsComponent {
  @Input() skills: Skill[] = [];

  activeCategory = 'All';

  get categories(): string[] {
    const cats = ['All', ...new Set(this.skills.map(s => s.category))];
    return cats;
  }

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'All') return this.skills;
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  extraTech = [
    'NgRx', 'Jest', 'Cypress', 'GitHub Actions', 'Terraform',
    'Redis', 'MongoDB', 'Kubernetes', 'Webpack', 'Vite',
    'Angular Material', 'SCSS', 'REST APIs', 'Microservices'
  ];
}
