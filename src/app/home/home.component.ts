import { Component, OnInit } from '@angular/core';

import {Meeting} from '../shared/meeting.model';
import {MeetingService} from '../shared/meeting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upcomings: Meeting[];

  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
    this.meetingService.getUpcomingMeetings().subscribe(m => this.upcomings = m);
  }

}
