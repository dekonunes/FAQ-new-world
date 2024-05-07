import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FAQ-new-world';
}
