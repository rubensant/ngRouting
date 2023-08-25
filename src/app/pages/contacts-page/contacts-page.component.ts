import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {
  IResponseListUser,
  IResponseUser,
} from 'src/app/models/users.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent {
  users: IResponseListUser = { results: [] };
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  page: number = 1;
  gender: string | undefined;

  goToHome() {
    const navigationExtras: NavigationExtras = {
      state: {
        data: {
          page: this.page,
        },
      },
    };
    this.router.navigate(['home'], navigationExtras);
  }

  nextPage() {
    this.page += 1;
    this.listUsers();
  }

  listUsers() {
    return this.usersService.getUsers(this.page, this.gender).subscribe({
      next: (responseNext: any) => {
        this.users = responseNext ?? [];
      },
      error: (responseError: any) => console.error(responseError),
      complete: () => console.log('petición terminada'),
    });
  }

  goToDetailContact(contactSelect: IResponseUser) {
    const dataExtra: NavigationExtras = {
      state: {
        data: contactSelect,
      },
    };
    this.router.navigate(
      [`contacts/${contactSelect.id.name + '-' + contactSelect.id.value}`],
      dataExtra
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => (this.gender = data['gender']));
    this.listUsers();
    console.log({ message: history.state?.data?.message });
  }
}
