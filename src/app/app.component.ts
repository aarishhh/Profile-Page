import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactComponent } from './components/contact/contact.component';
import { PROFILE_DATA } from './data/profile.data';
import { Profile } from './interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificatesComponent,
    ContactComponent,
  ],
  template: `
    <div class="app-wrapper">
      <app-header
        [name]="profile.name"
        [socialLinks]="profile.socialLinks"
      />
      <main>
        <app-hero [profile]="profile" />
        <app-skills [skills]="profile.skills" />
        <app-projects [projects]="profile.projects" />
        <app-certificates
          [certificates]="profile.certificates"
          [education]="profile.education"
        />
        <app-contact [profile]="profile" />
      </main>
    </div>
  `,
  styles: [`
    .app-wrapper {
      min-height: 100vh;
      background: #070d1a;
    }
    main {
      position: relative;
    }
  `],
})
export class AppComponent {
  profile: Profile = PROFILE_DATA;
}
