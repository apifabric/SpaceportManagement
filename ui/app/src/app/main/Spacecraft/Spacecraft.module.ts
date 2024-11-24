import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SPACECRAFT_MODULE_DECLARATIONS, SpacecraftRoutingModule} from  './Spacecraft-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SpacecraftRoutingModule
  ],
  declarations: SPACECRAFT_MODULE_DECLARATIONS,
  exports: SPACECRAFT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpacecraftModule { }