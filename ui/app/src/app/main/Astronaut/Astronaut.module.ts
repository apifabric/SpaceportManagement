import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASTRONAUT_MODULE_DECLARATIONS, AstronautRoutingModule} from  './Astronaut-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AstronautRoutingModule
  ],
  declarations: ASTRONAUT_MODULE_DECLARATIONS,
  exports: ASTRONAUT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AstronautModule { }