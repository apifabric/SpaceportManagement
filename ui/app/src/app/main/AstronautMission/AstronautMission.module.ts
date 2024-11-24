import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASTRONAUTMISSION_MODULE_DECLARATIONS, AstronautMissionRoutingModule} from  './AstronautMission-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AstronautMissionRoutingModule
  ],
  declarations: ASTRONAUTMISSION_MODULE_DECLARATIONS,
  exports: ASTRONAUTMISSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AstronautMissionModule { }