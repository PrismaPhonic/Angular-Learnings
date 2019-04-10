import {Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
    </div>
  `
})
export class SuccessAlertComponent {}
