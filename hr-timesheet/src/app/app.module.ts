import { NgModule         } from '@angular/core';
import {FormsModule       } from '@angular/forms';
import { BrowserModule    } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    AnalyticsComponent,
    TimesheetComponent,
    TopNavbarComponent,
    DepartmentsComponent,
    AnalyticsTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
