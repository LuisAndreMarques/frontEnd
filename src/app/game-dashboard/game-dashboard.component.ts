import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})

export class GameDashboardComponent implements OnInit {

  user: UserService[];

  username: String = '';

  constructor(private _user: UserService, private _router: Router) {
    this._user.dashboard()
      .subscribe(
        data => this.addName(data),
        error => this._router.navigate(['/login'])
      )
  }

  addName(data) {
    this.username = data.username;
  }

  ngOnInit() {

  }

  logout() {
    this._user.logout()
      .subscribe(
        data => { console.log(data); this._router.navigate(['/login']) },
        error => console.error(error)
      )
  }


}
