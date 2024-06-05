import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor() {}

  public event(
    eventName: string,
    eventCategory: string,
    eventLabel: string,
    eventValue: string = ''
  ): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: eventValue,
      });
    }
  }
}
