import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { IContact } from 'src/app/models/randomuser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  selectedFriend: IContact | undefined;

  constructor(private router: Router, private auth: AuthService) {}

  goToContacts(gender?: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        gender,
      },
      state: {
        data: {
          message: 'hello!',
        },
      },
    };
    this.router.navigate(['dashboard/random-contacts'], navigationExtras);
  }

  ngOnInit() {
    this.selectedFriend = history.state.data?.friend;
    console.log(
      'Ruben: HomePageComponent -> ngOnInit -> this.selectedFriend ',
      this.selectedFriend
    );
  }
}
