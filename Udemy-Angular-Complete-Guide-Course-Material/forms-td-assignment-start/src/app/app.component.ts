import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  submitted = false;
  subscriptions: string[] = [
    'Basic',
    'Advanced',
    'Pro'
  ];
  submittedContent = {
    email: '',
    subscriptions: 'Advanced',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.signupForm.form.patchValue({
      subscriptions: 'Advanced'
    });
  }

  onSubmit() {
    this.submittedContent.email = this.signupForm.form.value.email;
    this.submittedContent.subscriptions = this.signupForm.form.value.subscriptions;
    this.submittedContent.password = this.signupForm.form.value.password;
    this.submitted = true;
  }
}
