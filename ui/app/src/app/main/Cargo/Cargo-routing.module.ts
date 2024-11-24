import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoHomeComponent } from './home/Cargo-home.component';
import { CargoNewComponent } from './new/Cargo-new.component';
import { CargoDetailComponent } from './detail/Cargo-detail.component';

const routes: Routes = [
  {path: '', component: CargoHomeComponent},
  { path: 'new', component: CargoNewComponent },
  { path: ':id', component: CargoDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Cargo-detail-permissions'
      }
    }
  }
];

export const CARGO_MODULE_DECLARATIONS = [
    CargoHomeComponent,
    CargoNewComponent,
    CargoDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }