import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.css']
})
export class HomeRegisterComponent implements OnInit {

  registerMode = false;
  constructor(public accountService: AccountService) { }
  ngOnInit(): void {
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
