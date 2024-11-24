import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautSkillHomeComponent } from './home/AstronautSkill-home.component';
import { AstronautSkillNewComponent } from './new/AstronautSkill-new.component';
import { AstronautSkillDetailComponent } from './detail/AstronautSkill-detail.component';

const routes: Routes = [
  {path: '', component: AstronautSkillHomeComponent},
  { path: 'new', component: AstronautSkillNewComponent },
  { path: ':id', component: AstronautSkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AstronautSkill-detail-permissions'
      }
    }
  }
];

export const ASTRONAUTSKILL_MODULE_DECLARATIONS = [
    AstronautSkillHomeComponent,
    AstronautSkillNewComponent,
    AstronautSkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronautSkillRoutingModule { }