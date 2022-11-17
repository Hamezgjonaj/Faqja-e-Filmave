import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FirebaseChartService } from '../chart/firebase-chart.service'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit {
  data: any

  email: any
  password: any = '*********'
  createDate: any
  login: any

  constructor(public firebase: FirebaseChartService) { }

  ngOnInit(): void {
    this.data = this.firebase.getUser()
    this.email = this.firebase.getUser().email
    this.createDate = this.firebase.getUser().metadata.creationTime
    this.login = this.firebase.getUser().metadata.lastSignInTime

  }

}
