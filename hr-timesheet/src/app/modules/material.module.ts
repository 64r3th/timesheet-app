import { NgModule            } from '@angular/core';
import { CommonModule        } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule      } from '@angular/material/card';
import { MatIconModule      } from '@angular/material/icon';
import { MatListModule      } from '@angular/material/list';
import { MatTabsModule      } from '@angular/material/tabs';
import { MatInputModule     } from '@angular/material/input';
import { MatButtonModule    } from '@angular/material/button';
import { MatToolbarModule   } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class MaterialModule { }
