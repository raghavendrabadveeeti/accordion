import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  employees: Employee[] = this.getEmployees();

  constructor() {
  }

  ngOnInit() {
  }

  public getEmployees() {
    let emp1 = new Employee();
    emp1.name = 'Raghavendra';
    emp1.id = '100';
    emp1.job = 'TA';

    let emp2 = new Employee();
    emp2.name = 'PSPK';
    emp2.id = '102';
    emp2.job = 'Actor';

    let emp3 = new Employee();
    emp3.name = 'RGV';
    emp3.id = '007';
    emp3.job = 'Director';

    return [emp1, emp2, emp3];
  }

  onHeaderClick(employee: Employee) {
    employee.isOpen = !employee.isOpen;
  }
}
