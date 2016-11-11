import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { MeetingsComponent} from './meetings/meetings.component';
import { SpeakersComponent} from './speakers/speakers.component';
import { MembersComponent} from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeetingsComponent,
    SpeakersComponent,
    MembersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
