import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class RestService {

  protected baseurl:string = 'http://localhost:8081';

  constructor(private http: HttpClient) { }


  protected get = (relativeUrl: string): Observable<any> => {debugger; return this.http.get(this.baseurl + relativeUrl); }

  protected post = (relativeUrl: string, data: any) => this.http.post(this.baseurl + relativeUrl, data);

  protected delete = (relativeUrl: string) => this.http.delete(this.baseurl + relativeUrl);

  protected put = (relativeUrl: string, data: any) => this.http.put(this.baseurl + relativeUrl, data);

}