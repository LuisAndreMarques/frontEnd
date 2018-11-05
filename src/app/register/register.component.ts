import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;

 
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null, [Validators.required]),
    last_name:new FormControl(null, [Validators.required]),
    username:new FormControl(null, [Validators.required]),
    email_address:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required, Validators.minLength(6)]),
    //cpassword:new FormControl(null, [Validators.required] ),
    birthdate:new FormControl(null,Validators.required),
    steam_id:new FormControl(null,Validators.required),
    ingame_name:new FormControl(null,Validators.required)
  });

 


  constructor(private _router: Router, private _user: UserService) { }

  ngOnInit() {
  }

  get f() { 
    console.log(this.registerForm.controls);
    return this.registerForm.controls; 
  }

  moveToLogin(){
    this._router.navigate(['./login']);
  }

  register(){
    this.submitted = true;
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpassword.value)){
      console.log('Invalid Form'); 
      return;
    } 
    	
    this._user.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }

  
 
  

}
