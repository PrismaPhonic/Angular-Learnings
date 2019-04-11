import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  statuses = ['stable', 'critical', 'finished'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required], [this.nameValidAsync]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      //projectStatus: new FormArray(this.statuses.map(status => new FormControl(status))),
      projectStatus: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  nameValid(control: FormControl): {[error: string]: boolean} {
    if (control.value === 'Test') {
      return {invalidName: true};
    }
    return null;
  }

  nameValidAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          return resolve({invalidName: true});
        }
        return resolve(null);
      }, 2000);
    });
    return promise;
  }
}
