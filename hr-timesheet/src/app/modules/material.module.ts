import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule    } from '@angular/material/icon';
import { MatButtonModule  } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
