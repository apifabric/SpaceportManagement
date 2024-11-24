import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AstronautMission-new',
  templateUrl: './AstronautMission-new.component.html',
  styleUrls: ['./AstronautMission-new.component.scss']
})
export class AstronautMissionNewComponent {
  @ViewChild("AstronautMissionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}