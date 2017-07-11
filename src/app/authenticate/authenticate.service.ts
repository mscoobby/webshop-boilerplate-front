import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthenticateService {

  constructor() { }

  public login(user) {
    return Promise.resolve(user)
  }

  public register(user) {
    return Promise.resolve(user)
  }

}
