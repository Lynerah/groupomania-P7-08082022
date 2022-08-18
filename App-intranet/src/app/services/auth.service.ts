import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = 'MyfakeToken'

  getToken(): string {
    return this.token;
  }
}
