import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    let formcontrols = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.minLength(4)]),
      email: new FormControl('',[
        Validators.required,
        Validators.email]),
      pasword: new FormControl('',[
        Validators.required]),
      repeatpwd: new FormControl('',[
        Validators.required])
      }
    this.myForm = fb.group(formcontrols)

  }
  ngOnInit(): void {
  }
  get firstname(){
    return this.myForm.get('firstname')
  }
  get lastname(){
    return this.myForm.get('lastname')
  }
  get email(){
    return this.myForm.get('email')
  }
  get pasword(){
    return this.myForm.get('pasword')
  }
  get repeatpwd(){
    return this.myForm.get('repeatpwd')
  }
  register()
  {
    console.log(this.myForm.value)
  }
}
