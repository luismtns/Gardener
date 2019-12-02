import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ComponentsModule } from '../components/components/components.module';
import {NgxMaskIonicModule} from 'ngx-mask-ionic'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    ComponentsModule,
    ReactiveFormsModule,
    NgxMaskIonicModule
  ],
  declarations: [Tab4Page],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Tab4PageModule {}
