import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDIO_INFO } from '../../data/apps';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly studio = STUDIO_INFO;
  copied = signal(false);

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.studio.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2400);
    } catch {
      // Fallback
    }
  }
}
