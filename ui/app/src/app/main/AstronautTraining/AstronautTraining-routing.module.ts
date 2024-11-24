import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautTrainingHomeComponent } from './home/AstronautTraining-home.component';
import { AstronautTrainingNewComponent } from './new/AstronautTraining-new.component';
import { AstronautTrainingDetailComponent } from './detail/AstronautTraining-detail.component';

const routes: Routes = [
  {path: '', component: AstronautTrainingHomeComponent},
  { path: 'new', component: AstronautTrainingNewComponent },
  { path: ':id', component: AstronautTrainingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AstronautTraining-detail-permissions'
      }
    }
  }
];

export const ASTRONAUTTRAINING_MODULE_DECLARATIONS = [
    AstronautTrainingHomeComponent,
    AstronautTrainingNewComponent,
    AstronautTrainingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronautTrainingRoutingModule { }