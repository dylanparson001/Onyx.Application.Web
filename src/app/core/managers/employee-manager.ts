import {EmployeeService} from '../services/employee-service/employee-service';
import {EmployeeResponse} from '../../shared/dtos/Employees/employee-response';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class EmployeeManager {
  employeeService: EmployeeService;

  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  async getActiveTechnicians(serviceDate: string): Promise<EmployeeResponse[]> {
    let activeTechs: EmployeeResponse[] = [];

    try {
      activeTechs = await this.employeeService.getActiveTechnicians(serviceDate);

    } catch (error) {
      console.error(error);
    }
    return activeTechs;
  }

}
