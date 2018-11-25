import { HttpErrorResponse, HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
  
     }

     permissions: Array<String> = null;

     get(endpoint: string): Promise<any> {
        var promise = new Promise<Boolean>((resolve)=> {
          var url = environment.apiUrl + endpoint;
            this.http.get(url, {
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
          }).subscribe(success => {
            console.log(success);
              resolve(this.handleResponse(success));
          }, (error: HttpErrorResponse) => {
    
          });
        });
    
        return promise;
      }

      post(endpoint: string, body: any = {}): Promise<any> {
        var promise = new Promise<Boolean>((resolve) =>{
          var url = environment.apiUrl + endpoint;
          console.log(JSON.stringify(body));
          this.http.post(url, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
          }).subscribe(success => {
            resolve(this.handleResponse(success));
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
        });

        return promise;
    }

      handleResponse(response: any): Promise<any> {
        var promise = new Promise<Boolean>((resolve, reject) => {
        resolve(response);

      });
      return promise;
  }
}