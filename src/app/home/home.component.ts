import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app';

  nameForm: FormGroup;
  
  constructor(private fb: FormBuilder, private singup:SignupService) { }

  ngOnInit() {

    this.singup.checkUsernameNotTaken("Santhosh")
    .subscribe(res => console.log(res));

    this.nameForm = this.fb.group({
      //username:new FormControl('', [Validators.required])
      username:['', [Validators.required], [this.validateUsernameNotTaken.bind(this)] ]
    })

    //using SetValue to set form values from server
    //this.nameForm.setValue({username:'Santhosh'});
  }

  validateUsernameNotTaken(control: AbstractControl){
      this.singup.checkUsernameNotTaken(control.value).subscribe( res => {
        //return res ? null : { userName: true };
        return false;
      });
      
  }

  btnParent(info){
    console.log("Button clicked from parent: " + info);
  }

  userLogin(){
    console.log("User Login:" + this.nameForm.value );
  }

}
