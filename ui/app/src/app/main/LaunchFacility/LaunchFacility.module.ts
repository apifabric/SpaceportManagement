import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LAUNCHFACILITY_MODULE_DECLARATIONS, LaunchFacilityRoutingModule} from  './LaunchFacility-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LaunchFacilityRoutingModule
  ],
  declarations: LAUNCHFACILITY_MODULE_DECLARATIONS,
  exports: LAUNCHFACILITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LaunchFacilityModule { }