import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardItemPage } from './card-item.page';

const routes: Routes = [
  {
    path: '',
    component: CardItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardItemPageRoutingModule {}
