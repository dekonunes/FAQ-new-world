import { LanguageService } from './../shared/language.service';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordionService } from './accordion.service';
import { Accordion } from './accordion.interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { GoogleAnalyticsService } from '../shared/google-analytics.service';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordions: Accordion[] | undefined;
  language: string = '';
  private subscription = new Subscription();
  paramsRouter: Params = {};

  constructor(
    private languageService: LanguageService,
    private accordionService: AccordionService,
    private route: ActivatedRoute,
    private gaService: GoogleAnalyticsService
  ) {
    this.subscription = this.languageService.currentLanguage.subscribe(
      (language) => {
        this.language = language;
      }
    );
  }

  ngOnInit() {
    this.subscription.add(
      this.languageService.currentLanguage.subscribe((language) => {
        this.accordionService.getAccordionData(language).subscribe({
          next: (data) => (this.accordions = data),
          error: (error) =>
            console.error('Error fetching accordion data:', error),
        });
      })
    );

    this.subscription.add(
      this.route.queryParams.subscribe(
        (params) => (this.paramsRouter = { item: params['item'] })
      )
    );
  }

  gaTrack(category: string, subcategory?: string) {
    const eventLabel = `${category} - ${
      subcategory ? `${subcategory} - ` : ''
    } ${this.language}`;
    this.gaService.event('accordion', 'accordion', 'click', eventLabel);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
