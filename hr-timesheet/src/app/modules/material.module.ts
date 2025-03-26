import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule    } from '@angular/material/card';
import { MatListModule    } from '@angular/material/list';
import { MatIconModule    } from '@angular/material/icon';
import { MatButtonModule  } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
