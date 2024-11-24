import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceAgencyHomeComponent } from './home/SpaceAgency-home.component';
import { SpaceAgencyNewComponent } from './new/SpaceAgency-new.component';
import { SpaceAgencyDetailComponent } from './detail/SpaceAgency-detail.component';

const routes: Routes = [
  {path: '', component: SpaceAgencyHomeComponent},
  { path: 'new', component: SpaceAgencyNewComponent },
  { path: ':id', component: SpaceAgencyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SpaceAgency-detail-permissions'
      }
    }
  },{
    path: ':space_agency_id/MissionSpaceAgency', loadChildren: () => import('../MissionSpaceAgency/MissionSpaceAgency.module').then(m => m.MissionSpaceAgencyModule),
    data: {
        oPermission: {
            permissionId: 'MissionSpaceAgency-detail-permissions'
        }
    }
}
];

export const SPACEAGENCY_MODULE_DECLARATIONS = [
    SpaceAgencyHomeComponent,
    SpaceAgencyNewComponent,
    SpaceAgencyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceAgencyRoutingModule { }