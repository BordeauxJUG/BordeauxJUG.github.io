import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { MeetingListComponent } from './meetings/meeting-list/meeting-list.component';
import { MeetingDetailComponent } from './meetings/meeting-detail/meeting-detail.component';
import { SpeakersComponent} from './speakers/speakers.component';
import { MembersComponent} from './members/members.component';

import {MeetingService} from './shared/meeting.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent,
    MembersComponent,
    HomeComponent,
    MeetingListComponent,
    MeetingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routes
  ],
  providers: [MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
