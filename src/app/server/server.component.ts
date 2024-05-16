import { Component } from "@angular/core";


@Component({
    selector: 'app-server', // unique name for the component
    templateUrl: './server.component.html',
    styles: [
        `
        .online {
            color: #fff
        }
        `
    ]
})
export class ServerComponent {
   serverId: number = 10; // string interpolation
   serverStatus: string = 'offline';
   constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

   getColor() {
    return this.serverStatus === 'online' ?  'green' : 'red';
   }

}
