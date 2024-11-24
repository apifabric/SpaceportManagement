import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASTRONAUTTRAINING_MODULE_DECLARATIONS, AstronautTrainingRoutingModule} from  './AstronautTraining-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AstronautTrainingRoutingModule
  ],
  declarations: ASTRONAUTTRAINING_MODULE_DECLARATIONS,
  exports: ASTRONAUTTRAINING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AstronautTrainingModule { }