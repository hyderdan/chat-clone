import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemechangeService {

  constructor() { }

  private themeChange = new BehaviorSubject<string>('');
  currentThemeChange = this.themeChange.asObservable();

  themechange(param: string) {
    this.themeChange.next(param);
  }
}
