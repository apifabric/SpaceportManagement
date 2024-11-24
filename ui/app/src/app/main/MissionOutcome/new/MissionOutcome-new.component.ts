import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MissionOutcome-new',
  templateUrl: './MissionOutcome-new.component.html',
  styleUrls: ['./MissionOutcome-new.component.scss']
})
export class MissionOutcomeNewComponent {
  @ViewChild("MissionOutcomeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}