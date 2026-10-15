import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss',
})
export class VisionComponent {
  scrollTo(targetId: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  }
}
