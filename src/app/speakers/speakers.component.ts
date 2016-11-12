import { Component, OnInit } from '@angular/core';

import { MdCard, MdCardTitleGroup, MdCardTitle, MdCardContent}  from '@angular/material/card';

import {SpeakerService} from '../shared/speaker.service';
import {Speaker} from '../shared/speaker.model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers: Speaker[];

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.speakerService.getSpeakers().subscribe(s => this.speakers = s);
  }

}
