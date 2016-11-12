import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.css']
})
export class MeetingDetailComponent implements OnInit {

  @Input() meeting;
  constructor() { }

  ngOnInit() {
  }

}
