import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  display = 'false';
  

  constructor(

    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
  }
  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      success => {
        setTimeout(function () {
          location.reload()
        }, 100);
        this.router.navigate(['']);
      },
      error => this.error = error
    );
  }

}




