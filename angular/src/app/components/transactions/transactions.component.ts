import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  @Input() transactions!: ITransaction[];
  @Output() removeTransactionEvent = new EventEmitter<string>();

  removeEvent(transactionId: string) {
    this.removeTransactionEvent.emit(transactionId);
  }
}
