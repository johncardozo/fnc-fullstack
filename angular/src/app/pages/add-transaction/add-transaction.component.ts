import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  addTransactionForm!: FormGroup;

  ngOnInit() {
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(10),
      type: new FormControl('expense'),
      category: new FormControl('food'),
      date: new FormControl(''),
    });
  }
  onSubmit() {
    console.log(this.addTransactionForm.value);
  }
}
