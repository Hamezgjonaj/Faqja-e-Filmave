import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IsAdminService } from '../../Services/is-admin.service'
import { AuthService } from '../../Home/Auth/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navShow: boolean = false
  constructor(private router: Router, public admin: IsAdminService, public auth: AuthService) { }

  ngOnInit(): void {
    window.onscroll = () => {
      if (window.scrollY > 100) {

        this.navShow = true;
      }
      else {
        this.navShow = false
      }
    }
  }
  goToUser() {
    this.router.navigate(['/profile']);
  }
}
