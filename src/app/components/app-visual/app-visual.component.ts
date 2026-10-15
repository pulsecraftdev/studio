import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioApp } from '../../data/apps';

@Component({
  selector: 'app-visual',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="app-visual visual-{{ app.visual }}"
      [class.visual-small]="small"
      [style.--app-accent]="'var(--' + app.accent + ')'"
      aria-hidden="true"
    >
      <div class="visual-glow"></div>

      <!-- ARROW ESCAPE VISUAL -->
      @if (app.visual === 'arrows') {
        <div class="grid-dots"></div>
        <div class="arrow-composition">
          <span class="arrow-line line-one">↗</span>
          <span class="arrow-line line-two">↘</span>
          <span class="arrow-dot dot-a"></span>
          <span class="arrow-dot dot-b"></span>
          <div class="arrow-path-line"></div>
        </div>
      }

      <!-- GIGGLY JELLY TOWER VISUAL -->
      @if (app.visual === 'jelly') {
        <div class="jelly-composition">
          <div class="jelly-shape jelly-one"></div>
          <div class="jelly-shape jelly-two"></div>
          <div class="jelly-shape jelly-three"></div>
          <div class="jelly-bubble bubble-one"></div>
          <div class="jelly-bubble bubble-two"></div>
        </div>
      }

      <!-- SIPORA VISUAL -->
      @if (app.visual === 'sipora') {
        <div class="water-composition">
          <div class="water-ring ring-one"></div>
          <div class="water-ring ring-two"></div>
          <div class="water-ring ring-three"></div>
          <span class="water-drop">💧</span>
          <div class="water-ripple"></div>
        </div>
      }

      <!-- WORD HEAVEN VISUAL -->
      @if (app.visual === 'letters') {
        <div class="letters-composition">
          <span class="letter-tile tile-w">W</span>
          <span class="letter-tile tile-o">O</span>
          <span class="letter-tile tile-r">R</span>
          <span class="letter-tile tile-d">D</span>
          <div class="letter-particle p-one">✦</div>
          <div class="letter-particle p-two">✧</div>
        </div>
      }
    </div>
  `,
  styleUrl: './app-visual.component.scss',
})
export class AppVisualComponent {
  @Input({ required: true }) app!: StudioApp;
  @Input() small = false;
}
