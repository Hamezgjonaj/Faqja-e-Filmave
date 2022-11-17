import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../../Auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  @Input('ngModel')
  model: NgModel;
  constructor(private auth: AuthService) { }

  ngOnInit(): void { }

  register() {
    if (this.email == '') {
      alert('Please enter email address');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }




}
