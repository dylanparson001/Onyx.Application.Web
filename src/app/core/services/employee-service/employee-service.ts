import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeResponse} from '../../../shared/dtos/Employees/employee-response';
import {EndPointConstants} from '../constants/end-point-constants';
import {firstValueFrom} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  async getActiveTechnicians(date: string): Promise<EmployeeResponse[]> {

    let activeTechs: EmployeeResponse[] = [];
    let url = EndPointConstants.GET_ACTIVE_TECHS_URL;

    url = url.replace("{{SERVICE_DATE}}", date);

    try {
      activeTechs = await firstValueFrom(this.http.get<EmployeeResponse[]>(url));

    } catch (error) {
      console.error(error);
    }
    return activeTechs;
  }
}
