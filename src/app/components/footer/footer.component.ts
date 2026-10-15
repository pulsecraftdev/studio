import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDIO_INFO } from '../../data/apps';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly studio = STUDIO_INFO;
  readonly currentYear = new Date().getFullYear();

  scrollTo(targetId: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  }
}
