import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Astronaut', loadChildren: () => import('./Astronaut/Astronaut.module').then(m => m.AstronautModule) },
    
        { path: 'AstronautMission', loadChildren: () => import('./AstronautMission/AstronautMission.module').then(m => m.AstronautMissionModule) },
    
        { path: 'AstronautSkill', loadChildren: () => import('./AstronautSkill/AstronautSkill.module').then(m => m.AstronautSkillModule) },
    
        { path: 'AstronautTraining', loadChildren: () => import('./AstronautTraining/AstronautTraining.module').then(m => m.AstronautTrainingModule) },
    
        { path: 'Cargo', loadChildren: () => import('./Cargo/Cargo.module').then(m => m.CargoModule) },
    
        { path: 'LaunchFacility', loadChildren: () => import('./LaunchFacility/LaunchFacility.module').then(m => m.LaunchFacilityModule) },
    
        { path: 'Mission', loadChildren: () => import('./Mission/Mission.module').then(m => m.MissionModule) },
    
        { path: 'MissionOutcome', loadChildren: () => import('./MissionOutcome/MissionOutcome.module').then(m => m.MissionOutcomeModule) },
    
        { path: 'MissionSpaceAgency', loadChildren: () => import('./MissionSpaceAgency/MissionSpaceAgency.module').then(m => m.MissionSpaceAgencyModule) },
    
        { path: 'SpaceAgency', loadChildren: () => import('./SpaceAgency/SpaceAgency.module').then(m => m.SpaceAgencyModule) },
    
        { path: 'Spacecraft', loadChildren: () => import('./Spacecraft/Spacecraft.module').then(m => m.SpacecraftModule) },
    
        { path: 'Spaceport', loadChildren: () => import('./Spaceport/Spaceport.module').then(m => m.SpaceportModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }