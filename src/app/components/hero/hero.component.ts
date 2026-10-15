import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDIO_INFO } from '../../data/apps';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly studio = STUDIO_INFO;

  scrollTo(targetId: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  }
}
