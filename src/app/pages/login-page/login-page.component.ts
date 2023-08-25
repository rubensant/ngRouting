import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  dataAuth = this.form.group({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  @Output() tokenAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private form: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (token) this.router.navigate(['home']);
  }

  onSubmit(data: any) {
    this.auth.login(data).subscribe({
      next: (responseNext: any) => {
        if (responseNext.token) {
          sessionStorage.setItem('token', responseNext.token);
          this.router.navigate(['dashboard']);
          this.tokenAdded.emit(true);
        }
      },
      error: (error: any) => console.error(error),
      complete: () => console.log('login ended'),
    });
  }

  tokenSaved() {}
}
