import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  @Input() transaction!: ITransaction;
  @Output() removeTransactionEvent = new EventEmitter<string>();

  dateStyles: Record<string, string> = {
    'border-bottom': '1px dashed #979797',
  };

  remove = () => {
    this.removeTransactionEvent.emit(this.transaction.id);
  };
}
