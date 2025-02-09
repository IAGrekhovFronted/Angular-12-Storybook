import { Component } from '@angular/core';

@Component({
  selector: 'storybook',
  templateUrl: './storybook.html',
  styleUrls: ['./storybook.scss']
})
export class StorybookComponent {
  typesOfShoes: string[] = ['Icon', 'Grid-text', 'Grid-factory'];

}