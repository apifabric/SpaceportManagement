import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionOutcomeHomeComponent } from './home/MissionOutcome-home.component';
import { MissionOutcomeNewComponent } from './new/MissionOutcome-new.component';
import { MissionOutcomeDetailComponent } from './detail/MissionOutcome-detail.component';

const routes: Routes = [
  {path: '', component: MissionOutcomeHomeComponent},
  { path: 'new', component: MissionOutcomeNewComponent },
  { path: ':id', component: MissionOutcomeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MissionOutcome-detail-permissions'
      }
    }
  }
];

export const MISSIONOUTCOME_MODULE_DECLARATIONS = [
    MissionOutcomeHomeComponent,
    MissionOutcomeNewComponent,
    MissionOutcomeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionOutcomeRoutingModule { }