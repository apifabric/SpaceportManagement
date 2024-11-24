import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Spacecraft-new',
  templateUrl: './Spacecraft-new.component.html',
  styleUrls: ['./Spacecraft-new.component.scss']
})
export class SpacecraftNewComponent {
  @ViewChild("SpacecraftForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}