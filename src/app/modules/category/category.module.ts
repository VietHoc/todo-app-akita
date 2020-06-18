import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryManagementComponent} from './category-management/category-management.component';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CategoryManagementComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedModule],
})
export class CategoryModule {}
