import { Component } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
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
}
