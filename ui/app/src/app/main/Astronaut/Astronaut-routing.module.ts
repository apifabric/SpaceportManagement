import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautHomeComponent } from './home/Astronaut-home.component';
import { AstronautNewComponent } from './new/Astronaut-new.component';
import { AstronautDetailComponent } from './detail/Astronaut-detail.component';

const routes: Routes = [
  {path: '', component: AstronautHomeComponent},
  { path: 'new', component: AstronautNewComponent },
  { path: ':id', component: AstronautDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Astronaut-detail-permissions'
      }
    }
  },{
    path: ':astronaut_id/AstronautMission', loadChildren: () => import('../AstronautMission/AstronautMission.module').then(m => m.AstronautMissionModule),
    data: {
        oPermission: {
            permissionId: 'AstronautMission-detail-permissions'
        }
    }
},{
    path: ':astronaut_id/AstronautSkill', loadChildren: () => import('../AstronautSkill/AstronautSkill.module').then(m => m.AstronautSkillModule),
    data: {
        oPermission: {
            permissionId: 'AstronautSkill-detail-permissions'
        }
    }
},{
    path: ':astronaut_id/AstronautTraining', loadChildren: () => import('../AstronautTraining/AstronautTraining.module').then(m => m.AstronautTrainingModule),
    data: {
        oPermission: {
            permissionId: 'AstronautTraining-detail-permissions'
        }
    }
}
];

export const ASTRONAUT_MODULE_DECLARATIONS = [
    AstronautHomeComponent,
    AstronautNewComponent,
    AstronautDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronautRoutingModule { }