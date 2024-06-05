import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LanguageService } from '../shared/language.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GoogleAnalyticsService } from '../shared/google-analytics.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  settings = false;
  selectedLanguage = 'en-US';

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private gaService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap((params: Params) => {
          const currentLanguage = params['lg'] || 'en-US';
          this.selectedLanguage = currentLanguage;
          if (params['lg']) {
            this.gaService.event('language_change', 'initial', currentLanguage);
          }
          return this.languageService.changeLanguage(currentLanguage);
        })
      )
      .subscribe();
  }

  onLanguageChange(newLanguage: string): void {
    this.selectedLanguage = newLanguage;
    this.gaService.event('language_change', 'click', newLanguage);
    this.languageService.changeLanguage(newLanguage).subscribe();
  }
}
