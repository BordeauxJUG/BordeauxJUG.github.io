import { Component, OnInit } from '@angular/core';

import {Meeting} from '../../shared/meeting.model';
import {BdxjugService} from '../../shared/bdxjug.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  meetings: Meeting[];

  constructor(private service: BdxjugService) { }

  ngOnInit() {
      this.service.getPastMeetings().subscribe(m => this.meetings = m);
  }

}
