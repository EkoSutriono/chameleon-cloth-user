import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(
    private httpClient: HttpClient,
    private storageService: LocalStorageService
  ) {}

  getData(
    url: string,
    param?: any,
    header?: any,
    responseType?: any
  ): Observable<any> {
    const httpParam = this.generateHttpParam(param);
    const httpHeader = this.generateHttpHeader(header);
    return this.httpClient
      .get(url, { params: httpParam, headers: httpHeader, responseType })
      .pipe(
        map((resp) => resp),
        catchError((err) => throwError(err))
      );
  }

  postData(url: string, body: any, param?: any, header?: any): Observable<any> {
    const httpParam = this.generateHttpParam(param);
    const httpHeader = this.generateHttpHeader(header);
    return this.httpClient
      .post(url, body, { params: httpParam, headers: httpHeader })
      .pipe(
        map((resp) => resp),
        catchError((err) => throwError(err))
      );
  }

  putData(url: string, body: any, param?: any, header?: any): Observable<any> {
    const httpParam = this.generateHttpParam(param);
    const httpHeader = this.generateHttpHeader(header);
    return this.httpClient
      .put(url, body, { params: httpParam, headers: httpHeader })
      .pipe(
        map((resp) => resp),
        catchError((err) => throwError(err))
      );
  }

  deleteData(url: string, param?: any, header?: any): Observable<any> {
    const httpParam = this.generateHttpParam(param);
    const httpHeader = this.generateHttpHeader(header);
    return this.httpClient
      .delete(url, { params: httpParam, headers: httpHeader })
      .pipe(
        map((resp) => resp),
        catchError((err) => throwError(err))
      );
  }

  public generateHttpParam(param: any): HttpParams {
    let result = new HttpParams();

    if (param) {
      Object.keys(param).forEach((key) => {
        if (
          param[key] !== null &&
          param[key] !== undefined &&
          param[key] !== ''
        ) {
          result = result.set(key, param[key]);
        }
      });
    }

    return result;
  }

  public generateHttpHeader(header: any): HttpHeaders {
    let result = new HttpHeaders();

    if (header) {
      Object.keys(header).forEach((key) => {
        if (
          header[key] !== null &&
          header[key] !== undefined &&
          header[key] !== ''
        ) {
          result = result.set(key, header[key]);
        }
      });
    }
    return result;
  }

  public getDataWithToken(
    url: string,
    paramsRequest?: any,
    requestHeaders?: any
  ): Observable<any> {
    var headers = new HttpHeaders({
      ...requestHeaders,
    });

    var params = this.generateHttpParam(paramsRequest);
    return this.httpClient.get(url, { headers, params });
  }

  public postDataWithToken(
    url: string,
    requestBody: any,
    responseType?: string
  ): Observable<any> {
    const headers = new HttpHeaders({});
    return (
      this.httpClient
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .post(url, requestBody, { headers, responseType })
    );
  }

  public putDataWithToken(
    url: string,
    requestBody: any,
    requestParam?: any
  ): Observable<any> {
    const headers = new HttpHeaders({});

    return this.httpClient.put(url, requestBody, {
      headers,
      params: requestParam,
    });
  }

  public deleteDataWithToken(
    url: string,
    requestHeaders?: any
  ): Observable<any> {
    var headers = new HttpHeaders({
      ...requestHeaders,
    });

    return this.httpClient.delete(url, { headers });
  }

  public postDataWithAuth(url: string, requestBody: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(environment.BASE_URL)}`,
    });

    return this.httpClient.post(url, requestBody, { headers });
  }

  public getDataWithAuth(url: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(environment.BASE_URL)}`,
    });

    return this.httpClient.get(url, { headers });
  }
}
