import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LanguageService } from '../shared/language.service';

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
export class HeaderComponent {
  settings = false;
  selectedLanguage: string;

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = 'en-US';
  }

  onLanguageChange(newLanguage: string): void {
    this.selectedLanguage = newLanguage;
    this.languageService.changeLanguage(newLanguage);
  }
}
