import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDIO_PRINCIPLES } from '../../data/apps';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly principles = STUDIO_PRINCIPLES;
}
