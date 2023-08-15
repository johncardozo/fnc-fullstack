import { Component, Input } from '@angular/core';
import { IBalance } from 'src/app/models/balance.model';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {
  @Input() balance!: IBalance;
}
