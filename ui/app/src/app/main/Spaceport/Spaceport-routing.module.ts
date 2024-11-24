import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceportHomeComponent } from './home/Spaceport-home.component';
import { SpaceportNewComponent } from './new/Spaceport-new.component';
import { SpaceportDetailComponent } from './detail/Spaceport-detail.component';

const routes: Routes = [
  {path: '', component: SpaceportHomeComponent},
  { path: 'new', component: SpaceportNewComponent },
  { path: ':id', component: SpaceportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Spaceport-detail-permissions'
      }
    }
  },{
    path: ':spaceport_id/LaunchFacility', loadChildren: () => import('../LaunchFacility/LaunchFacility.module').then(m => m.LaunchFacilityModule),
    data: {
        oPermission: {
            permissionId: 'LaunchFacility-detail-permissions'
        }
    }
},{
    path: ':spaceport_id/Mission', loadChildren: () => import('../Mission/Mission.module').then(m => m.MissionModule),
    data: {
        oPermission: {
            permissionId: 'Mission-detail-permissions'
        }
    }
}
];

export const SPACEPORT_MODULE_DECLARATIONS = [
    SpaceportHomeComponent,
    SpaceportNewComponent,
    SpaceportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceportRoutingModule { }