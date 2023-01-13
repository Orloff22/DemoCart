import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
questionForm = new FormGroup({
  user: new FormControl('', [Validators.required, Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
})
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // get the values of the form that has been enterd by the user
    console.log(this.questionForm);
  }
}
