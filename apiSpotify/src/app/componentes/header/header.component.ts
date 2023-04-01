import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormCreatePlayListComponent } from '../form-create-play-list/form-create-play-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private router: Router;

  constructor(public openModal: MatDialog,router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }




}
