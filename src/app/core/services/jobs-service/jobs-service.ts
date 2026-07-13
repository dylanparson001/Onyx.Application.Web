import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../../shared/dtos/Auth/login-response';
import {firstValueFrom} from 'rxjs';
import {EndPointConstants} from '../constants/end-point-constants';

export class JobsService {

  constructor(private http: HttpClient) {
  }

  async getTodaysJobs(id: number, serviceDate: string) {
  }
}
