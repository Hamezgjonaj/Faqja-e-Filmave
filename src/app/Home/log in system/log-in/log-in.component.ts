import { Component, OnInit, NgModule, Input } from '@angular/core';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {

    if (this.email == '') {
      alert('Please enter email address');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';


  }

}
