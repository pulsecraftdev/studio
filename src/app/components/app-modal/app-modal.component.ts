import { Component, EventEmitter, HostListener, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioApp } from '../../data/apps';
import { AppVisualComponent } from '../app-visual/app-visual.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, AppVisualComponent],
  templateUrl: './app-modal.component.html',
  styleUrl: './app-modal.component.scss',
})
export class AppModalComponent {
  @Input({ required: true }) app: StudioApp | null = null;
  @Output() closeModal = new EventEmitter<void>();

  copiedPackage = signal(false);

  @HostListener('window:keydown.escape')
  onEscape() {
    this.close();
  }

  close() {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  async copyPackage() {
    if (!this.app) return;
    try {
      await navigator.clipboard.writeText(this.app.packageName);
      this.copiedPackage.set(true);
      setTimeout(() => this.copiedPackage.set(false), 2000);
    } catch {
      // Browser clipboard fallback
    }
  }
}
