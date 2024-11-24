import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautMissionHomeComponent } from './home/AstronautMission-home.component';
import { AstronautMissionNewComponent } from './new/AstronautMission-new.component';
import { AstronautMissionDetailComponent } from './detail/AstronautMission-detail.component';

const routes: Routes = [
  {path: '', component: AstronautMissionHomeComponent},
  { path: 'new', component: AstronautMissionNewComponent },
  { path: ':id', component: AstronautMissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AstronautMission-detail-permissions'
      }
    }
  }
];

export const ASTRONAUTMISSION_MODULE_DECLARATIONS = [
    AstronautMissionHomeComponent,
    AstronautMissionNewComponent,
    AstronautMissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronautMissionRoutingModule { }