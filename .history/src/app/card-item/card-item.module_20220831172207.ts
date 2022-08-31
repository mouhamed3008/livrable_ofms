import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardItemPageRoutingModule } from './card-item-routing.module';

import { CardItemPage } from './card-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardItemPageRoutingModule
  ],
  declarations: [CardItemPage],
  exports:[CardItemPage]
})
export class CardItemPageModule {}
