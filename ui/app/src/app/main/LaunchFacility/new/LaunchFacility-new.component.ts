import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'LaunchFacility-new',
  templateUrl: './LaunchFacility-new.component.html',
  styleUrls: ['./LaunchFacility-new.component.scss']
})
export class LaunchFacilityNewComponent {
  @ViewChild("LaunchFacilityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}