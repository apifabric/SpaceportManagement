import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Cargo-new',
  templateUrl: './Cargo-new.component.html',
  styleUrls: ['./Cargo-new.component.scss']
})
export class CargoNewComponent {
  @ViewChild("CargoForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}