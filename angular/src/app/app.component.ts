import { Component } from '@angular/core';
import { IBalance } from './models/balance.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  balance: IBalance = {
    amount: 55_000,
    income: 100_000,
    expenses: 45_000,
  };
}
