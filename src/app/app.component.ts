import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logged: boolean | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
    this.logged = sessionStorage.getItem('token') ? true : false;
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  changeLogged() {
    this.logged = true;
  }
}
