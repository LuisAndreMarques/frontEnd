import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //user: UserService[];
  user: any = {};
  username: String;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.userService.getUserDetail(params.username)
    //   .subscribe(res => {
    //     this.user = res;
    //   });
    // });
  }

  // getUserDetail(username) {
  //   this.userService
  //     .getUsers()
  //     .subscribe((data: UserService) => {
  //       this.user = data;
  //     });
  // }

}
