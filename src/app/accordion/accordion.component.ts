import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordionService } from './accordion.service';
import { Accordion } from './accordion.interface';
import { CommonModule } from '@angular/common';

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

  constructor(private accordionService: AccordionService) {}

  ngOnInit() {
    this.accordionService.getAccordionData().subscribe({
      next: (response) => (this.accordions = response),
      error: (err) => console.error('Error fetching accordion data', err),
    });
  }
}
