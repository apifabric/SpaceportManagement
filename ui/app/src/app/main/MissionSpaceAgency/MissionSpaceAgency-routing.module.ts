import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionSpaceAgencyHomeComponent } from './home/MissionSpaceAgency-home.component';
import { MissionSpaceAgencyNewComponent } from './new/MissionSpaceAgency-new.component';
import { MissionSpaceAgencyDetailComponent } from './detail/MissionSpaceAgency-detail.component';

const routes: Routes = [
  {path: '', component: MissionSpaceAgencyHomeComponent},
  { path: 'new', component: MissionSpaceAgencyNewComponent },
  { path: ':id', component: MissionSpaceAgencyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MissionSpaceAgency-detail-permissions'
      }
    }
  }
];

export const MISSIONSPACEAGENCY_MODULE_DECLARATIONS = [
    MissionSpaceAgencyHomeComponent,
    MissionSpaceAgencyNewComponent,
    MissionSpaceAgencyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionSpaceAgencyRoutingModule { }