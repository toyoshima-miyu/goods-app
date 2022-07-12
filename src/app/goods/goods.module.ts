import { NgModule } from '@angular/core';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods.component';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { GoodsUpdateComponent } from './goods-update/goods-update.component';


const routes: Routes = [
  { 
    path: 'goods', component: GoodsComponent,
    children: [
      { path: '', component: GoodsListComponent },
      { path: ':goodsId', component: GoodsDetailsComponent}
    ]
  },
];

@NgModule({
  declarations: [
    GoodsDetailsComponent,
    GoodsListComponent,
    GoodsComponent,
    GoodsCreateComponent,
    GoodsUpdateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class GoodsModule { }
