import { Component } from '@angular/core';
import { IBalance } from './models/balance.model';
import { ITransaction } from './models/transaction.model';

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
  transactions: ITransaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: 5_000,
      category: 'utilities',
      date: new Date(2023, 8, 10),
    },
    {
      id: '2',
      type: 'expense',
      amount: 15_000,
      category: 'food',
      date: new Date(2023, 8, 11),
    },
    {
      id: '3',
      type: 'income',
      amount: 80_000,
      category: 'payroll',
      date: new Date(2023, 8, 12),
    },
  ];

  removeTransaction(transactionId: string) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
  }
}
