import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paginated } from '@feathersjs/feathers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    this.messages$ = data.messages$().pipe(
        // our data is paginated, so map to .data
        map((m: Paginated<any>) => m.data),
        // reverse the messages array, to have the most recent message at the end
        // necessary because we get a descendingly sorted array from the data service
        map((m: Array<any>) => m.reverse()),
      );

    // get users from data service
    this.users$ = data.users$().pipe(
        // our data is paginated, so map to .data
        map((u: Paginated<any>) => u.data)
      );
  }

  sendMessage(message: string) {
    this.data.sendMessage(message);
  }

  logOut() {
    this.auth.logOut();
  }
}
