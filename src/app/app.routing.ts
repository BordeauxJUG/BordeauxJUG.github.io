import {Routes, RouterModule} from '@angular/router';

import { HomeComponent} from './home/home.component';
import { PresentationComponent} from './presentation/presentation.component';
import { MeetingListComponent } from './meetings/meeting-list/meeting-list.component';
import { SpeakersComponent} from './speakers/speakers.component';
import { MembersComponent} from './members/members.component';

const appRoutes : Routes = [
    {path: '', component : HomeComponent},
    {path: 'presentation', component : PresentationComponent},
    {path: 'meetings', component : MeetingListComponent},
    {path: 'speakers', component : SpeakersComponent},
    {path: 'members', component : MembersComponent}
];

export const routes = RouterModule.forRoot(appRoutes, {useHash: true});