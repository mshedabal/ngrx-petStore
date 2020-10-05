import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// avoid name not found warnings
declare var Auth0Lock: any;
declare var localStorage: any;

@Injectable()
export class AuthService {
  lock = new Auth0Lock('tAL05kXxiR90IYP96P4bqWK8UKwK3ivH', 'dev-bp9o7l1k.us.auth0.com', {
    auth: {
      redirectUrl: 'http://127.0.0.1:4200',
      responseType: 'token'
    }
  });
  userProfile: Object;

  constructor(private router: Router) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // add callback for lock 'hash_parsed' event
    this.lock.on('hash_parsed', (authResult) => {
      if (authResult) {
        localStorage.setItem('id_token', authResult.idToken);

        // get user profile
        this.lock.getProfile(authResult.idToken, (error, profile) => {
          if (error) {
            throw Error('There was an error retrieving profile data.');
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          this.userProfile = profile;

          // on successful authentication and profile retrieval, go to /create route
          this.router.navigate(['/create']);
        });
      } else if (authResult && !authResult.idToken) {
        // authentication failed: show Lock widget and log a warning
        this.login();
        console.warn(`There was an error authenticating: ${authResult}`);
      }
    });
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  get authenticated(): boolean {
    return !!localStorage.getItem('id_token');
  }

}