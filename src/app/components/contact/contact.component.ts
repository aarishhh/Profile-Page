import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="section-container">
        <div class="contact-layout">
          <div class="contact-info">
            <span class="section-label">// 04. contact</span>
            <h2 class="section-title">Let's Build Something</h2>
            <p class="contact-body">
              Whether you have a project in mind, a role to discuss, or just want to connect —
              my inbox is always open. I typically respond within 24 hours.
            </p>

            <div class="contact-items">
              <a [href]="'mailto:' + profile?.email" class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <span class="item-label">Email</span>
                  <span class="item-value">{{ profile?.email }}</span>
                </div>
              </a>

              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <span class="item-label">Location</span>
                  <span class="item-value">{{ profile?.location }}</span>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a
                *ngFor="let link of profile?.socialLinks"
                [href]="link.url"
                target="_blank"
                rel="noopener"
                class="social-pill"
              >
                {{ link.platform }}
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="form-card">
            <div class="form-success" *ngIf="submitted">
              <div class="success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button (click)="submitted = false" class="btn-reset">Send another</button>
            </div>

            <form *ngIf="!submitted" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    [(ngModel)]="formData.name"
                    required
                    placeholder="Your name"
                    class="form-input"
                    [class.error]="nameInput.invalid && nameInput.touched"
                    #nameInput="ngModel"
                  />
                  <span class="field-error" *ngIf="nameInput.invalid && nameInput.touched">Required</span>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    [(ngModel)]="formData.email"
                    required
                    email
                    placeholder="your@email.com"
                    class="form-input"
                    [class.error]="emailInput.invalid && emailInput.touched"
                    #emailInput="ngModel"
                  />
                  <span class="field-error" *ngIf="emailInput.invalid && emailInput.touched">Valid email required</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  [(ngModel)]="formData.subject"
                  placeholder="What's this about?"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  class="form-input form-textarea"
                  [class.error]="msgInput.invalid && msgInput.touched"
                  #msgInput="ngModel"
                ></textarea>
                <span class="field-error" *ngIf="msgInput.invalid && msgInput.touched">Required</span>
              </div>

              <button
                type="submit"
                class="btn-submit"
                [disabled]="contactForm.invalid || sending"
              >
                <span *ngIf="!sending">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </span>
                <span *ngIf="sending" class="sending-state">
                  <span class="spinner"></span> Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-inner">
          <span class="footer-box">Aarish</span>
          <span class="footer-copy">
            Built with Angular 17 &amp; Tailwind CSS · {{ currentYear }}
          </span>
        </div>
      </footer>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 6rem 2rem 0;
    }
    .section-container {
      max-width: 1100px;
      margin: 0 auto;
      padding-bottom: 6rem;
    }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      color: #63b3ed;
      display: block;
      margin-bottom: 0.5rem;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #f7fafc;
      margin: 0 0 1rem;
      letter-spacing: -0.03em;
    }

    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-body {
      color: #718096;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin-bottom: 2rem;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .contact-item:hover { opacity: 0.8; }
    .contact-icon {
      width: 44px; height: 44px;
      background: rgba(99,179,237,0.08);
      border: 1px solid rgba(99,179,237,0.15);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #63b3ed;
      flex-shrink: 0;
    }
    .item-label {
      display: block;
      font-size: 0.75rem;
      color: #4a5568;
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .item-value {
      display: block;
      color: #e2e8f0;
      font-size: 0.92rem;
    }

    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .social-pill {
      background: rgba(74,85,104,0.2);
      border: 1px solid rgba(74,85,104,0.3);
      color: #718096;
      padding: 0.4rem 1rem;
      border-radius: 6px;
      text-decoration: none;
      font-size: 0.8rem;
      font-family: 'JetBrains Mono', monospace;
      transition: all 0.2s;
    }
    .social-pill:hover {
      color: #63b3ed;
      border-color: rgba(99,179,237,0.4);
    }

    /* Form */
    .form-card {
      background: rgba(16, 20, 35, 0.8);
      border: 1px solid rgba(99,179,237,0.1);
      border-radius: 20px;
      padding: 2rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
      position: relative;
    }
    label {
      font-size: 0.8rem;
      color: #a0aec0;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.03em;
    }
    .form-input {
      background: rgba(26,32,44,0.8);
      border: 1px solid rgba(74,85,104,0.3);
      color: #e2e8f0;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-size: 0.9rem;
      transition: border-color 0.2s, box-shadow 0.2s;
      outline: none;
      font-family: inherit;
      width: 100%;
      box-sizing: border-box;
    }
    .form-input::placeholder { color: #4a5568; }
    .form-input:focus {
      border-color: rgba(99,179,237,0.5);
      box-shadow: 0 0 0 3px rgba(99,179,237,0.08);
    }
    .form-input.error { border-color: rgba(252,129,74,0.5); }
    .form-textarea { resize: vertical; min-height: 120px; }
    .field-error {
      font-size: 0.72rem;
      color: #fc814a;
      font-family: 'JetBrains Mono', monospace;
      position: absolute;
      bottom: -1.2rem;
      right: 0;
    }

    .btn-submit {
      width: 100%;
      background: linear-gradient(135deg, #2b6cb0, #3182ce);
      color: white;
      border: none;
      padding: 0.9rem 1.5rem;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-family: inherit;
      margin-top: 0.5rem;
    }
    .btn-submit:hover:not(:disabled) {
      background: linear-gradient(135deg, #3182ce, #63b3ed);
      box-shadow: 0 4px 20px rgba(99,179,237,0.3);
      transform: translateY(-1px);
    }
    .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

    .sending-state {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .spinner {
      width: 16px; height: 16px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      display: inline-block;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Success state */
    .form-success {
      text-align: center;
      padding: 3rem 1rem;
    }
    .success-icon {
      width: 60px; height: 60px;
      background: rgba(72,187,120,0.15);
      border: 2px solid #68d391;
      color: #68d391;
      font-size: 1.8rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }
    .form-success h3 { color: #f7fafc; font-size: 1.4rem; margin-bottom: 0.5rem; }
    .form-success p { color: #718096; margin-bottom: 1.5rem; }
    .btn-reset {
      background: none;
      border: 1px solid rgba(99,179,237,0.3);
      color: #63b3ed;
      padding: 0.6rem 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      transition: all 0.2s;
    }
    .btn-reset:hover { background: rgba(99,179,237,0.08); }

    /* Footer */
    .footer {
      border-top: 1px solid rgba(99,179,237,0.08);
      padding: 2rem;
    }
    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .footer-box {
      display: inline-block;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #e2e8f0;
      letter-spacing: 0.04em;
      padding: 0.3rem 0.9rem;
      border: 1px solid rgba(99,179,237,0.25);
      border-radius: 8px;
      background: rgba(99,179,237,0.05);
      transition: color 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s;
      cursor: default;
    }
    .footer-box:hover {
      color: #fff;
      border-color: rgba(99,179,237,0.8);
      background: rgba(99,179,237,0.12);
      box-shadow: 0 0 14px rgba(99,179,237,0.45), 0 0 30px rgba(99,179,237,0.2);
    }
    .footer-copy {
      color: #4a5568;
      font-size: 0.82rem;
      font-family: 'JetBrains Mono', monospace;
    }

    @media (max-width: 768px) {
      .contact-layout { grid-template-columns: 1fr; gap: 2rem; }
      .form-row { grid-template-columns: 1fr; }
    }
  `],
})
export class ContactComponent {
  @Input() profile: Profile | null = null;

  currentYear = new Date().getFullYear();
  submitted = false;
  sending = false;

  formData = { name: '', email: '', subject: '', message: '' };

  // ✅ Fix: computed getter avoids the strict null NG2 template error
  get firstName(): string {
    return this.profile?.name?.split(' ')[0] ?? 'Portfolio';
  }

  onSubmit() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1500);
  }
}
