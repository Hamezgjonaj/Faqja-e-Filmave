import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit {
  // email = this.email.value;
  constructor() { }

  ngOnInit(): void {
  }

}
