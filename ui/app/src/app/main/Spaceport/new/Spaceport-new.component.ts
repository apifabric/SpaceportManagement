import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Spaceport-new',
  templateUrl: './Spaceport-new.component.html',
  styleUrls: ['./Spaceport-new.component.scss']
})
export class SpaceportNewComponent {
  @ViewChild("SpaceportForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}