import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OrangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrangProvider {
  private apiUrl ="https://randomuser.me/api/?results=20";
  constructor(public http: HttpClient) {
    console.log('Hello OrangProvider Provider');
  }

getOrangFromApi(){
  return this.http.get(this.apiUrl)
}
}
