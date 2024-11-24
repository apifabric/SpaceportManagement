import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MISSIONOUTCOME_MODULE_DECLARATIONS, MissionOutcomeRoutingModule} from  './MissionOutcome-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MissionOutcomeRoutingModule
  ],
  declarations: MISSIONOUTCOME_MODULE_DECLARATIONS,
  exports: MISSIONOUTCOME_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MissionOutcomeModule { }