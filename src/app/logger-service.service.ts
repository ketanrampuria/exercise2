import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(log:string){
    console.log(log);
  }
  
  info(info:string){
    console.info(info);
  }
  
  warn(warn:string){
    console.warn(warn);
  }
}

