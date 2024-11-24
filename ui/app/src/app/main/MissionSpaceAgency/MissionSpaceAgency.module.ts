import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MISSIONSPACEAGENCY_MODULE_DECLARATIONS, MissionSpaceAgencyRoutingModule} from  './MissionSpaceAgency-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MissionSpaceAgencyRoutingModule
  ],
  declarations: MISSIONSPACEAGENCY_MODULE_DECLARATIONS,
  exports: MISSIONSPACEAGENCY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MissionSpaceAgencyModule { }