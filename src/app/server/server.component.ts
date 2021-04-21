import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';
  username: string = ''

  getServerStatus(){
    return this.serverStatus;
  }

  resetUsername(){
    this.username ='';
  }

}