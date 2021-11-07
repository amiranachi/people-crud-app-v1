import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    let formcontrols = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      pwd: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    }
    this.myForm = fb.group(formcontrols);
  }
  ngOnInit(): void {
  }
  get email() {
    return this.myForm.get('email')
  }
  get pwd() {
    return this.myForm.get('pwd')
  }
  login() {
    let data = this.myForm.value
    let user = new Login(data.email,data.pwd)
    console.log(user)
  }

}
