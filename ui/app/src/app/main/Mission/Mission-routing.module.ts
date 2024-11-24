import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionHomeComponent } from './home/Mission-home.component';
import { MissionNewComponent } from './new/Mission-new.component';
import { MissionDetailComponent } from './detail/Mission-detail.component';

const routes: Routes = [
  {path: '', component: MissionHomeComponent},
  { path: 'new', component: MissionNewComponent },
  { path: ':id', component: MissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Mission-detail-permissions'
      }
    }
  },{
    path: ':mission_id/AstronautMission', loadChildren: () => import('../AstronautMission/AstronautMission.module').then(m => m.AstronautMissionModule),
    data: {
        oPermission: {
            permissionId: 'AstronautMission-detail-permissions'
        }
    }
},{
    path: ':mission_id/Cargo', loadChildren: () => import('../Cargo/Cargo.module').then(m => m.CargoModule),
    data: {
        oPermission: {
            permissionId: 'Cargo-detail-permissions'
        }
    }
},{
    path: ':mission_id/MissionOutcome', loadChildren: () => import('../MissionOutcome/MissionOutcome.module').then(m => m.MissionOutcomeModule),
    data: {
        oPermission: {
            permissionId: 'MissionOutcome-detail-permissions'
        }
    }
},{
    path: ':mission_id/MissionSpaceAgency', loadChildren: () => import('../MissionSpaceAgency/MissionSpaceAgency.module').then(m => m.MissionSpaceAgencyModule),
    data: {
        oPermission: {
            permissionId: 'MissionSpaceAgency-detail-permissions'
        }
    }
},{
    path: ':current_mission_id/Spacecraft', loadChildren: () => import('../Spacecraft/Spacecraft.module').then(m => m.SpacecraftModule),
    data: {
        oPermission: {
            permissionId: 'Spacecraft-detail-permissions'
        }
    }
}
];

export const MISSION_MODULE_DECLARATIONS = [
    MissionHomeComponent,
    MissionNewComponent,
    MissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }