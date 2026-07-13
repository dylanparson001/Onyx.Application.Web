import {Component, OnInit, signal} from '@angular/core';
import {EmployeeService} from '../../../core/services/employee-service/employee-service';
import {EmployeeManager} from '../../../core/managers/employee-manager';
import {EmployeeResponse} from '../../../shared/dtos/Employees/employee-response';
import {BehaviorSubject, delay, firstValueFrom, Observable} from 'rxjs';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  selectedServiceDate: Date = new Date("07/13/2026");

  activeTechnicians = signal<EmployeeResponse[] | null>(null)


  // private activeTechnicians = new BehaviorSubject<EmployeeResponse[]>(
  //   [{
  //     id: 0, firstName: '', lastName: '', city: '', accessLevel: '', address: '', hireDate: '', state: '',
  //     username: '', phoneNumber: '', zipCode: ''
  //   }]
  // )
  // activeTechnicians$: Observable<EmployeeResponse[]> = this.activeTechnicians.asObservable()

  constructor(private employeeManager: EmployeeManager) {
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.getActiveTechnicians();
    } catch (error) {
      console.log(error);
    }
  }


  async getActiveTechnicians() {
    let selectedDateFormattedString: string = new Intl.DateTimeFormat('en-US').format(this.selectedServiceDate);

    try {
      const response = await this.employeeManager.getActiveTechnicians(selectedDateFormattedString)
      this.activeTechnicians.set(response);

    } catch (error) {
      console.error(error);
    }
  }
}
