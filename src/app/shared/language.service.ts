import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSource = new BehaviorSubject<string>('en-US');
  currentLanguage = this.languageSource.asObservable();

  constructor() {}

  changeLanguage(language: string): Observable<string> {
    this.languageSource.next(language);
    return this.languageSource.asObservable();
  }
}
