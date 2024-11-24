import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacecraftHomeComponent } from './home/Spacecraft-home.component';
import { SpacecraftNewComponent } from './new/Spacecraft-new.component';
import { SpacecraftDetailComponent } from './detail/Spacecraft-detail.component';

const routes: Routes = [
  {path: '', component: SpacecraftHomeComponent},
  { path: 'new', component: SpacecraftNewComponent },
  { path: ':id', component: SpacecraftDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Spacecraft-detail-permissions'
      }
    }
  }
];

export const SPACECRAFT_MODULE_DECLARATIONS = [
    SpacecraftHomeComponent,
    SpacecraftNewComponent,
    SpacecraftDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacecraftRoutingModule { }