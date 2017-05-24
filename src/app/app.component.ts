import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:Usuario ={
    name: 'Carlos Rojas',
    account: {
      email: 'hi@carlosrojasblog.com',
      confirm: 'hi@carlosrojasblog.com'
    }
  };
}
