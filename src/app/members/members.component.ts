import { Component, OnInit } from '@angular/core';

import {Member} from '../shared/member.model';
import {BdxjugService} from '../shared/bdxjug.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  memberCount: number;

  constructor(private service: BdxjugService) { }

  ngOnInit() {
      this.service.getMembers().subscribe(m => {
        this.members = m;
        this.memberCount = m.length;
      });
  }

}
