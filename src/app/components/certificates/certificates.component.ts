import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificate, Education } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certificates" class="certs-section">
      <div class="section-container">

        <!-- Education -->
        <div class="section-header">
          <span class="section-label">// 04. background</span>
          <h2 class="section-title">Education</h2>
          <p class="section-sub">My academic journey</p>
        </div>

        <div class="edu-timeline">
          <div
            *ngFor="let edu of education; let last = last"
            class="timeline-item"
            [class.last]="last"
          >
            <div class="timeline-dot" [class.active]="edu.status === 'ongoing'"></div>
            <div class="timeline-line" *ngIf="!last"></div>

            <div class="edu-card">
              <div class="edu-top">
                <div>
                  <h3 class="edu-degree">{{ edu.degree }}</h3>
                  <p class="edu-institution">{{ edu.institution }}</p>
                </div>
                <div class="edu-meta">
                  <span class="edu-period">{{ edu.period }}</span>
                  <span
                    class="edu-status"
                    [class.ongoing]="edu.status === 'ongoing'"
                    [class.completed]="edu.status === 'completed'"
                  >
                    {{ edu.status === 'ongoing' ? '● Ongoing' : '✓ Completed' }}
                  </span>
                </div>
              </div>
              <div class="edu-grade" *ngIf="edu.grade">
                <span class="grade-label">Result</span>
                <span class="grade-value">{{ edu.grade }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certificates -->
        <div class="section-header certs-header">
          <span class="section-label">// 05. credentials</span>
          <h2 class="section-title">Certifications</h2>
          <p class="section-sub">Courses and certifications I've completed</p>
        </div>

        <div class="certs-grid">
          <div *ngFor="let cert of certificates" class="cert-card">
            <div class="cert-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>

            <div class="cert-body">
              <h3 class="cert-title">{{ cert.title }}</h3>
              <div class="cert-meta">
                <span class="cert-issuer">{{ cert.issuer }}</span>
                <span class="cert-dot">·</span>
                <span class="cert-date">{{ cert.date }}</span>
              </div>

              <div class="cert-skills" *ngIf="cert.skills?.length">
                <span class="skill-tag" *ngFor="let s of cert.skills">{{ s }}</span>
              </div>
            </div>

            <a
              *ngIf="cert.credentialUrl"
              [href]="cert.credentialUrl"
              target="_blank"
              rel="noopener"
              class="cert-link"
              aria-label="View credential"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>

          <!-- Empty state -->
          <div class="empty-cert" *ngIf="!certificates?.length">
            <p>No certificates added yet. Edit <code>profile.data.ts</code> to add yours.</p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .certs-section {
      padding: 6rem 2rem;
    }
    .section-container {
      max-width: 900px;
      margin: 0 auto;
    }
    .section-header {
      margin-bottom: 3rem;
    }
    .certs-header {
      margin-top: 5rem;
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

    /* ── Education Timeline ── */
    .edu-timeline {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .timeline-item {
      display: grid;
      grid-template-columns: 28px 1fr;
      gap: 0 1.25rem;
      position: relative;
    }
    .timeline-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #2d3748;
      border: 2px solid #4a5568;
      margin-top: 1.4rem;
      position: relative;
      z-index: 1;
      flex-shrink: 0;
      justify-self: center;
      transition: all 0.2s;
    }
    .timeline-dot.active {
      background: #63b3ed;
      border-color: #63b3ed;
      box-shadow: 0 0 12px rgba(99,179,237,0.5);
    }
    .timeline-line {
      position: absolute;
      left: 13px;
      top: calc(1.4rem + 14px);
      width: 2px;
      height: calc(100% - 1.4rem - 7px);
      background: linear-gradient(to bottom, rgba(99,179,237,0.2), transparent);
    }
    .edu-card {
      background: rgba(16,20,35,0.7);
      border: 1px solid rgba(99,179,237,0.08);
      border-radius: 12px;
      padding: 1.25rem 1.5rem;
      margin-bottom: 1rem;
      transition: border-color 0.2s, transform 0.2s;
    }
    .edu-card:hover {
      border-color: rgba(99,179,237,0.2);
      transform: translateX(4px);
    }
    .edu-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .edu-degree {
      font-size: 1rem;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 0.25rem;
    }
    .edu-institution {
      font-size: 0.85rem;
      color: #718096;
      font-family: 'JetBrains Mono', monospace;
    }
    .edu-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.4rem;
      flex-shrink: 0;
    }
    .edu-period {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: #4a5568;
    }
    .edu-status {
      font-size: 0.72rem;
      font-family: 'JetBrains Mono', monospace;
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
    }
    .edu-status.ongoing {
      background: rgba(99,179,237,0.1);
      border: 1px solid rgba(99,179,237,0.25);
      color: #63b3ed;
    }
    .edu-status.completed {
      background: rgba(104,211,145,0.08);
      border: 1px solid rgba(104,211,145,0.2);
      color: #68d391;
    }
    .edu-grade {
      margin-top: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-top: 1px solid rgba(74,85,104,0.2);
      padding-top: 0.75rem;
    }
    .grade-label {
      font-size: 0.72rem;
      color: #4a5568;
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .grade-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.88rem;
      color: #a0aec0;
      font-weight: 600;
    }

    /* ── Certificates Grid ── */
    .certs-grid {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .cert-card {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      background: rgba(16,20,35,0.7);
      border: 1px solid rgba(99,179,237,0.08);
      border-radius: 12px;
      padding: 1.25rem 1.5rem;
      transition: border-color 0.2s, transform 0.2s;
    }
    .cert-card:hover {
      border-color: rgba(99,179,237,0.25);
      transform: translateX(4px);
    }
    .cert-icon {
      width: 44px;
      height: 44px;
      background: rgba(99,179,237,0.08);
      border: 1px solid rgba(99,179,237,0.15);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #63b3ed;
      flex-shrink: 0;
    }
    .cert-body {
      flex: 1;
    }
    .cert-title {
      font-size: 0.98rem;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 0.35rem;
    }
    .cert-meta {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 0.75rem;
    }
    .cert-issuer {
      font-size: 0.82rem;
      color: #63b3ed;
      font-family: 'JetBrains Mono', monospace;
    }
    .cert-dot {
      color: #4a5568;
    }
    .cert-date {
      font-size: 0.78rem;
      color: #4a5568;
      font-family: 'JetBrains Mono', monospace;
    }
    .cert-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .skill-tag {
      background: rgba(74,85,104,0.2);
      border: 1px solid rgba(74,85,104,0.25);
      color: #a0aec0;
      padding: 0.2rem 0.65rem;
      border-radius: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
    }
    .cert-link {
      color: #4a5568;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 6px;
      transition: color 0.2s, background 0.2s;
      flex-shrink: 0;
      align-self: center;
    }
    .cert-link:hover {
      color: #63b3ed;
      background: rgba(99,179,237,0.08);
    }
    .empty-cert {
      color: #4a5568;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      padding: 2rem;
      border: 1px dashed rgba(74,85,104,0.3);
      border-radius: 12px;
      text-align: center;
    }
    .empty-cert code {
      color: #63b3ed;
    }
  `],
})
export class CertificatesComponent {
  @Input() certificates: Certificate[] = [];
  @Input() education: Education[] = [];
}
