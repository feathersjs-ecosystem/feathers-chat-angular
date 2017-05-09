import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  messages$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(private data: DataService, private auth: AuthService) {
    // get messages from data service
    this.messages$ = data.messages$()
      // our data is paginated, so map to .data
      .map(m => m.data)
      // reverse the messages array, to have the most recent message at the end
      // necessary because we get a descendingly sorted array from the data service
      .map(m => m.reverse());

    // get users from data service
    this.users$ = data.users$()
      // our data is paginated, so map to .data
      .map(u => u.data);
  }

  sendMessage(message: string) {
    this.data.sendMessage(message);
  }

  logOut() {
    this.auth.logOut();
  }
}
