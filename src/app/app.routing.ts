import {Routes, RouterModule} from '@angular/router';

import { HomeComponent} from './home/home.component';
import { MeetingsComponent} from './meetings/meetings.component';
import { SpeakersComponent} from './speakers/speakers.component';
import { MembersComponent} from './members/members.component';

const appRoutes : Routes = [
    {path: '', component : HomeComponent},
    {path: 'meetings', component : MeetingsComponent},
    {path: 'speakers', component : SpeakersComponent},
    {path: 'members', component : MembersComponent}
];

export const routes = RouterModule.forRoot(appRoutes, {useHash: true});