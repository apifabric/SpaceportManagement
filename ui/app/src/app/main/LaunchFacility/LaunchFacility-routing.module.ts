import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchFacilityHomeComponent } from './home/LaunchFacility-home.component';
import { LaunchFacilityNewComponent } from './new/LaunchFacility-new.component';
import { LaunchFacilityDetailComponent } from './detail/LaunchFacility-detail.component';

const routes: Routes = [
  {path: '', component: LaunchFacilityHomeComponent},
  { path: 'new', component: LaunchFacilityNewComponent },
  { path: ':id', component: LaunchFacilityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LaunchFacility-detail-permissions'
      }
    }
  }
];

export const LAUNCHFACILITY_MODULE_DECLARATIONS = [
    LaunchFacilityHomeComponent,
    LaunchFacilityNewComponent,
    LaunchFacilityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchFacilityRoutingModule { }