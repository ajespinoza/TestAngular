import { Component, OnInit } from '@angular/core';

declare function setExternalUserId(userid: any):any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  data = {
    externalUser: ''
  }

  constructor(){}

  ngOnInit(): void {
    
  }

  send(){
    setExternalUserId(this.data.externalUser);
  }

}
