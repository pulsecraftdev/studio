import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPS_DATA, StudioApp, STUDIO_INFO } from '../../data/apps';
import { AppVisualComponent } from '../app-visual/app-visual.component';

@Component({
  selector: 'app-apps-showcase',
  standalone: true,
  imports: [CommonModule, AppVisualComponent],
  templateUrl: './apps-showcase.component.html',
  styleUrl: './apps-showcase.component.scss',
})
export class AppsShowcaseComponent {
  readonly apps = APPS_DATA;
  readonly studio = STUDIO_INFO;

  @Output() appSelected = new EventEmitter<StudioApp>();

  selectApp(app: StudioApp) {
    this.appSelected.emit(app);
  }
}
