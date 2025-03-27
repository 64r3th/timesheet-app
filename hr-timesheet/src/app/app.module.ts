import { NgModule      } from '@angular/core';
import {FormsModule    } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent            } from './app.component';
import { MaterialModule          } from './modules/material.module';
import { AppRoutingModule        } from './modules/app-routing.module';
import { TimesheetComponent      } from './components/timesheet/timesheet.component';
import { AnalyticsComponent      } from './components/analytics/analytics.component';
import { TopNavbarComponent      } from './components/top-navbar/top-navbar.component';
import { DepartmentsComponent    } from './components/departments/departments.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    TimesheetComponent,
    AnalyticsComponent,
    TopNavbarComponent,
    AnalyticsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
