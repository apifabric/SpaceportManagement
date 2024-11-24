import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MissionSpaceAgency-new',
  templateUrl: './MissionSpaceAgency-new.component.html',
  styleUrls: ['./MissionSpaceAgency-new.component.scss']
})
export class MissionSpaceAgencyNewComponent {
  @ViewChild("MissionSpaceAgencyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}