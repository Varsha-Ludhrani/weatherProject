import { Component } from '@angular/core';
import{Http,Response} from '@angular/http';
import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({providedIn:'root'})
export class AppComponent {
  private apiURl= `'https://samples.openweathermap.org/data/2.5/forecast/daily?zip=94040&appid=b6907d289e10d714a6e88b30761fae22
  '`;

  data:any={};


  constructor(private http:Http){
  this.getTemperature();
  this.getData();
}

getData(){
  return this.http.get(this.apiURl).pipe(map((res:Response) => res.json()))
}

getTemperature(){
  this.getData().subscribe(data=>{
    console.log(data);
    this.data=data
  })
}


}



