import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Department         } from '../../interfaces/department';
import { DepartmentsService } from '../../services/departments.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent implements OnInit {
  departments!: Department[];
  $departments: Observable<Department[]> | undefined;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.departmentsService.getDepartments().subscribe(departments => {
    //   this.departments = departments;
    // });

    this.$departments = this.departmentsService.getDepartments();
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }

}
