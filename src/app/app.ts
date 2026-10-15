import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPS_DATA, StudioApp } from './data/apps';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AppsShowcaseComponent } from './components/apps-showcase/apps-showcase.component';
import { AboutComponent } from './components/about/about.component';
import { VisionComponent } from './components/vision/vision.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppModalComponent } from './components/app-modal/app-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AppsShowcaseComponent,
    AboutComponent,
    VisionComponent,
    ContactComponent,
    FooterComponent,
    AppModalComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  selectedApp = signal<StudioApp | null>(null);

  ngOnInit() {
    this.checkInitialHash();
    window.addEventListener('hashchange', () => this.checkInitialHash());
  }

  openApp(app: StudioApp) {
    this.selectedApp.set(app);
    window.history.replaceState(null, '', `#${app.id}`);
  }

  closeApp() {
    const current = this.selectedApp();
    this.selectedApp.set(null);
    if (current && window.location.hash === `#${current.id}`) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  private checkInitialHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const match = APPS_DATA.find((a) => a.id === hash);
      if (match) {
        this.selectedApp.set(match);
      }
    }
  }
}
