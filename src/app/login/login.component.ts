import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() invalidmessage: string;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private _router: Router, private _user: UserService) {

  }

  ngOnInit() {
  }


  login() {
    if (!this.loginForm.valid) {
      console.log('Invalid');
      this.invalidmessage = 'Invalid login';
      this.closeWindow();
    } else {
      this._user.login(JSON.stringify(this.loginForm.value))
        .subscribe(
          data => { console.log(data); this._router.navigate(['/dashboard']); },
          error => { console.error(error); this.invalidmessage = 'Wrong credentials'; this.closeWindow(); }
        )
    }
  }

  moveToRegister() {
    this._router.navigate(['/register']);
  }

  closeWindow() {
    (async () => {
      await delay(3000);
      this.invalidmessage = '';
    })();
  }
}

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
