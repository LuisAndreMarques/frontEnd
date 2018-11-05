import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ConnectionService]
})
export class ChatComponent implements OnInit {


  user: String;
  room: String;
  messageText: String;
  messageArray: Array<{ user: String, message: String }> = [];
  constructor(private _connectionService: ConnectionService) {
    this._connectionService.newUserJoined()
      .subscribe(data => this.messageArray.push(data));


    this._connectionService.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this._connectionService.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }

  join() {
    this._connectionService.joinRoom({ user: this.user, room: this.room });
  }

  leave() {
    this._connectionService.leaveRoom({ user: this.user, room: this.room });
  }

  sendMessage() {
    this._connectionService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
  }


  ngOnInit() {
  }

}
