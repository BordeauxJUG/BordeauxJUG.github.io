import { Component, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material/sidenav';
import { MdToolbar } from '@angular/material/toolbar';
import { MdList, MdListItem } from '@angular/material/list';
import { Sponsor } from './shared/sponsor.model';
import { BdxjugService } from './shared/bdxjug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  sponsors: Sponsor[];

  constructor(private service: BdxjugService) { }

  ngOnInit() {
    this.service.getSponsors().subscribe(m => this.sponsors = m);
  }

}
