import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact, ResultsRandom } from 'src/app/models/randomuser';
import { RamdomUserService } from 'src/app/services/ramdom-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss'],
})
export class RandomContactPageComponent {
  randomContact: IContact | undefined;
  randomContacts: IContact[] | undefined;
  statusRequest: 'loading' | 'error' | 'success' | 'init' = 'init';
  selectedFriend: IContact | undefined;

  constructor(
    private randomUserService: RamdomUserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getContact();
  }

  getContact(n?: number, gender?: 'female' | 'male') {
    this.statusRequest = 'loading';
    this.randomUserService.getRandomContacts(n, gender).subscribe({
      next: (response: ResultsRandom) => {
        console.log(
          'Ruben: RandomContactPageComponent -> getContact -> response',
          response
        );
        this.statusRequest = 'success';
        if (!n) {
          this.randomContacts = undefined;
          this['randomContact'] = response.results?.at(0);
        }
        if (n || gender) {
          this.randomContact = undefined;
          this['randomContacts'] = response.results;
        }
      },
      error: (error: any) => {
        this.statusRequest = 'error';
        console.error(error);
      },
      complete() {
        console.info('Request to random contact ended!');
      },
    });
  }

  getNContacts(n: number) {
    this.getContact(n);
  }

  getContactByGender(gender: 'female' | 'male') {
    this.getContact(10, gender);
  }

  selectFriend() {
    console.log(
      'Ruben: RandomContactPageComponent -> selectFriend -> friend',
      this.randomContact
    );
    this.selectedFriend = this.randomContact;
  }

  goToHome() {
    const navigationExtras: NavigationExtras = {
      state: {
        data: {
          friend: this.selectedFriend,
        },
      },
    };
    this.router.navigate(['dashboard'], navigationExtras);
  }
}
