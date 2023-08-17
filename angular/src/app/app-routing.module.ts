import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import pages
import { AboutComponent } from './pages/about/about.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { HomeComponent } from './pages/home/home.component';

// Application routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add', component: AddTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
