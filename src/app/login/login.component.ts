import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];

  constructor(private router: Router) {}

  login(): void {
    const user = this.users.find(u => u.username === this.email && u.password === this.password);
    if (user) {
      // Successful login, navigate to account page
      this.router.navigate(['/account']);
    } else {
      // Invalid login, show error message
      alert('Invalid credentials. Please try again.');
    }
  }
}
