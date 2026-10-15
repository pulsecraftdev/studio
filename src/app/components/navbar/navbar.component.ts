import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('home');

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 24);
    this.updateActiveSection();
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  scrollTo(targetId: string, event: Event) {
    event.preventDefault();
    this.closeMenu();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${targetId}`);
      this.activeSection.set(targetId);
    }
  }

  private updateActiveSection() {
    const sections = ['contact', 'vision', 'about', 'apps', 'home'];
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el && el.offsetTop <= scrollPosition) {
        this.activeSection.set(section);
        break;
      }
    }
  }
}
