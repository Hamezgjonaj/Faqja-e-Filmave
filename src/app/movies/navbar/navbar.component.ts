import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navShow: boolean = false
  constructor(private router: Router  ) { }

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
goToUser(){
this.router.navigate(['/profile']);
}
}
