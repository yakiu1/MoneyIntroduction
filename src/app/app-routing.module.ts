import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MoneyDeatilComponent } from './money-deatil/money-deatil.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'MoneyDeatil', component: MoneyDeatilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
