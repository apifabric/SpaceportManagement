import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Astronaut-new',
  templateUrl: './Astronaut-new.component.html',
  styleUrls: ['./Astronaut-new.component.scss']
})
export class AstronautNewComponent {
  @ViewChild("AstronautForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}