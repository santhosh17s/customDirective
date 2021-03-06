import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { saveAs } from 'file-saver/FileSaver';

export interface AppState{
  message: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app';
  message$: Observable<string>;

  nameForm: FormGroup;
  showMeForm:FormGroup;

  options = {
    resizable: false,
    draggable: true
  }
  
  constructor(private fb: FormBuilder, private singup:SignupService, private store:Store<AppState>, private http: Http) { }

  ngOnInit() {

    this.singup.checkUsernameNotTaken("Santhosh")
    .subscribe(res => console.log(res));

    this.nameForm = this.fb.group({
      //username:new FormControl('', [Validators.required])
      username:['', [Validators.required], [this.validateUsernameNotTaken.bind(this)] ]
      
    });


    this.showMeForm = this.fb.group({
      gender: 'female',
      isMarried: false
    });

    //using SetValue to set form values from server
    //this.nameForm.setValue({username:'Santhosh'});
  
    //STORE - CURRENT STATE 
    this.message$ = this.store.pipe(select('message'));
  }

  showMe(showMeForm){
    console.log("ShowMe", showMeForm.value);
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

  saveFile(){
    /* const headers = new Headers();
    headers.append('Accept', 'text/plain');
    this.http.get('api/files', {headers: headers})
    .toPromise()
    .then( response => this.saveToFileSystem(response)); */

  }

  saveToFileSytem(output){

  }

  UpdateValue() {
    this.options.resizable = true;
  }


}
