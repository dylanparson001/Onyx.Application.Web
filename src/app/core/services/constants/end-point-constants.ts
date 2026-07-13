export class EndPointConstants {
  static BASE_URL = 'https://localhost:8080/';

//#region Auth Urls
  static LOGIN_URL = this.BASE_URL + 'Auth/login';
  static REGISTER_URL = this.BASE_URL + 'Auth/register';
//#endregion

//#region Employee Urls
  static GET_ACTIVE_TECHS_URL = this.BASE_URL + 'User/get-active-technicians?date={{SERVICE_DATE}}';

//#endregion

//#region Job Urls
  static GET_JOBS_BY_TECHNICIAN_URL = this.BASE_URL + 'Jobs/get-active-jobs?id={{ID}}&serviceDate={{SERVICE_DATE}}';
//#endregion

//#region Invoices Urls

//#endregion
}
