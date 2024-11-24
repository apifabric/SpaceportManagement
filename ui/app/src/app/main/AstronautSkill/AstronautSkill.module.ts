import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASTRONAUTSKILL_MODULE_DECLARATIONS, AstronautSkillRoutingModule} from  './AstronautSkill-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AstronautSkillRoutingModule
  ],
  declarations: ASTRONAUTSKILL_MODULE_DECLARATIONS,
  exports: ASTRONAUTSKILL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AstronautSkillModule { }