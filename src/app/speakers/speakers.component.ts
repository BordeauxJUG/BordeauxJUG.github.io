import { Component, OnInit } from '@angular/core';

import { MdCard, MdCardTitleGroup, MdCardTitle, MdCardContent}  from '@angular/material/card';

import {BdxjugService} from '../shared/bdxjug.service';
import {Speaker} from '../shared/speaker.model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers: Speaker[];

  constructor(private service: BdxjugService) { }

  ngOnInit() {
    this.service.getSpeakers().subscribe(s => this.speakers = s);
  }

}
