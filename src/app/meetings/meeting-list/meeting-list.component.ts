import { Component, OnInit } from '@angular/core';

import {Meeting} from '../../shared/meeting.model';
import {MeetingService} from '../../shared/meeting.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  meetings: Meeting[];

  constructor(private meetingService:MeetingService) { }

  ngOnInit() {
      this.meetingService.getPastMeetings().subscribe(m => this.meetings = m);
  }

}
