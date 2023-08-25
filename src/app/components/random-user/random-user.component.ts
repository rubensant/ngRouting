import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ResultsRandom, IContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss'],
})
export class RandomUserComponent {
  randomResults: ResultsRandom | undefined;
  @Input() randomContact: IContact | undefined;
  @Input() status: string = 'init';

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
