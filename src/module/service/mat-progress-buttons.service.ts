import { Injectable } from '@angular/core';

@Injectable()
export class MatProgressButtonsService {
  constructor() { }
  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }
}
