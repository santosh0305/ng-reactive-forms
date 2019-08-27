import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { UserRegistrationServiceService } from './user-registration-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private userRegSvc : UserRegistrationServiceService){

  }
  registrationForm = new FormGroup({
    'FirstName': new FormControl('santosh',Validators.required),
    'LastName': new FormControl('nander',Validators.minLength(5)),
    'Password': new FormControl('tests123',Validators.required),
    'Email': new FormControl('santosh@gmail.com',Validators.email),
    'PhoneNumber': new FormControl('santosh@gmail.com',Validators.email),
  });  

  RegisterUser(){
    console.log(this.registrationForm.controls['FirstName']);
    
    console.log(this.registrationForm);

    if(this.registrationForm.valid){
      // Save to DB;
      this.userRegSvc.registerUser(this.registrationForm.value)
      console.log(this.registrationForm.value);
    }
    else{
      console.error('Unable to save !!');
    }
    
  }
}
