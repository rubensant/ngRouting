import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  @Output() loginAction: EventEmitter<{ email: string; password: string }> =
    new EventEmitter<{ email: string; password: string }>();

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        'eve.holt@reqres.in',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: ['cityslicka', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Submit of login form

  submitLogin() {
    if (this.loginForm.valid) {
      console.table(this.loginForm.value);
      this.loginAction.emit(this.loginForm.value);
      // TODO requests to AuthService
      // this.authService.login(this.loginForm.value).subscribe({
      //   next: (response: any) => {
      //     console.log(
      //       'Ruben: LoginFormComponent -> submitLogin -> response',
      //       response
      //     );
      //     sessionStorage.setItem('token', response.token);
      //     this.router.navigate(['contacts']);
      //     this.loginForm.reset();
      //   },
      //   error: (error: any) => console.error({ error }),
      //   complete: () => console.log('login ended'),
      // });
    }
  }
}
