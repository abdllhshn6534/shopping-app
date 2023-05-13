import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root' /*heryerden erişim sağlanmasını sağlıyo yani global
   servis.tanımlamassak sadece çağırıldığı component te çalışır component içinde @component kısmında 
   providers yazıp bi örneğini oluşturuyoruz*/
})
export class AlertifyService {

  constructor() { }
  succes(message:string){
    alertify.confirm(message)
  }
}
