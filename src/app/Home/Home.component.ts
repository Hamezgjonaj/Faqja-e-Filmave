import { Component, OnInit } from '@angular/core';
import { HomeRoutingModule } from './Home-routing.module';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { console.log("Hello"); }

  ngOnInit(): void {
  }


}
console.log("Hello world!");
