import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  @Input() transactions!: ITransaction[];

  miFuncion(transactionId: string) {
    alert(`Eliminando la transacción #${transactionId}`);
  }
}
