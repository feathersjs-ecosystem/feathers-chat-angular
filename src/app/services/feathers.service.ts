import { Injectable } from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import feathersAuthClient from '@feathersjs/authentication-client';

/**
 * Simple wrapper for feathers
 */
@Injectable()
export class Feathers {
  private _feathers = feathers();
  private _socket: any;

  constructor() {
    this._socket = io('http://localhost:3030');       // init socket.io

    this._feathers = feathers();                      // init Feathers

    this._feathers
      .configure(feathersSocketIOClient(this._socket))  // add socket.io plugin
      .configure(feathersAuthClient({                   // add authentication plugin
        storage: window.localStorage
      }))
      .configure(feathersRx({                           // add feathers-reactive plugin
        idField: '_id'
      }));
  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }

  // expose authentication
  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  // expose logout
  public logout() {
    return this._feathers.logout();
  }
}
