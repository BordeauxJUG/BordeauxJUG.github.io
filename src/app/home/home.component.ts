import { Component, OnInit } from '@angular/core';

import { Meeting } from '../shared/meeting.model';
import { BdxjugService } from '../shared/bdxjug.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hasUpcommings: boolean;
  upcomings: Meeting[];

  constructor(private service: BdxjugService) {
    this.hasUpcommings = false;
  }

  ngOnInit() {
    this.service.getUpcomingMeetings().subscribe(m => {
      this.upcomings = m;
      this.hasUpcommings = m.length > 0;
    });
  }

}
