import { MenuRootItem } from 'ontimize-web-ngx';

import { AstronautCardComponent } from './Astronaut-card/Astronaut-card.component';

import { AstronautMissionCardComponent } from './AstronautMission-card/AstronautMission-card.component';

import { AstronautSkillCardComponent } from './AstronautSkill-card/AstronautSkill-card.component';

import { AstronautTrainingCardComponent } from './AstronautTraining-card/AstronautTraining-card.component';

import { CargoCardComponent } from './Cargo-card/Cargo-card.component';

import { LaunchFacilityCardComponent } from './LaunchFacility-card/LaunchFacility-card.component';

import { MissionCardComponent } from './Mission-card/Mission-card.component';

import { MissionOutcomeCardComponent } from './MissionOutcome-card/MissionOutcome-card.component';

import { MissionSpaceAgencyCardComponent } from './MissionSpaceAgency-card/MissionSpaceAgency-card.component';

import { SpaceAgencyCardComponent } from './SpaceAgency-card/SpaceAgency-card.component';

import { SpacecraftCardComponent } from './Spacecraft-card/Spacecraft-card.component';

import { SpaceportCardComponent } from './Spaceport-card/Spaceport-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Astronaut', name: 'ASTRONAUT', icon: 'view_list', route: '/main/Astronaut' }
    
        ,{ id: 'AstronautMission', name: 'ASTRONAUTMISSION', icon: 'view_list', route: '/main/AstronautMission' }
    
        ,{ id: 'AstronautSkill', name: 'ASTRONAUTSKILL', icon: 'view_list', route: '/main/AstronautSkill' }
    
        ,{ id: 'AstronautTraining', name: 'ASTRONAUTTRAINING', icon: 'view_list', route: '/main/AstronautTraining' }
    
        ,{ id: 'Cargo', name: 'CARGO', icon: 'view_list', route: '/main/Cargo' }
    
        ,{ id: 'LaunchFacility', name: 'LAUNCHFACILITY', icon: 'view_list', route: '/main/LaunchFacility' }
    
        ,{ id: 'Mission', name: 'MISSION', icon: 'view_list', route: '/main/Mission' }
    
        ,{ id: 'MissionOutcome', name: 'MISSIONOUTCOME', icon: 'view_list', route: '/main/MissionOutcome' }
    
        ,{ id: 'MissionSpaceAgency', name: 'MISSIONSPACEAGENCY', icon: 'view_list', route: '/main/MissionSpaceAgency' }
    
        ,{ id: 'SpaceAgency', name: 'SPACEAGENCY', icon: 'view_list', route: '/main/SpaceAgency' }
    
        ,{ id: 'Spacecraft', name: 'SPACECRAFT', icon: 'view_list', route: '/main/Spacecraft' }
    
        ,{ id: 'Spaceport', name: 'SPACEPORT', icon: 'view_list', route: '/main/Spaceport' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AstronautCardComponent

    ,AstronautMissionCardComponent

    ,AstronautSkillCardComponent

    ,AstronautTrainingCardComponent

    ,CargoCardComponent

    ,LaunchFacilityCardComponent

    ,MissionCardComponent

    ,MissionOutcomeCardComponent

    ,MissionSpaceAgencyCardComponent

    ,SpaceAgencyCardComponent

    ,SpacecraftCardComponent

    ,SpaceportCardComponent

];